"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUser, resetList } from "@/store/auth";
// key=AIzaSyAAFRXm7fY0YkyUW_sAkhxGwJdb_3Ldw5M
export default function Home() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [mode, updateMode] = useState("login");
  const inputEmail = useRef();
  const inputPassword = useRef();
  useEffect(() => {
    dispatch(resetList())
  }, [])
  const submitHandler = async (event) => {
    console.log(mode, 'key=AIzaSyAAFRXm7fY0YkyUW_sAkhxGwJdb_3Ldw5M')
    event.preventDefault();
    try {
      const enterUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAFRXm7fY0YkyUW_sAkhxGwJdb_3Ldw5M";
      const body = {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        returnSecureToken: true,
      };
      const response = await axios.post(enterUrl, body);
      console.log(response)
      localStorage.setItem('token', response.data.idToken)
      dispatch(addUser({id : response.data.idToken}))
      router.push(`/to-do/${response.data.localId}`)
    } catch (err) {
      alert(err.response.data.error.message);
    }
  };
  return (
    <div className={[styles.rootContainer]}>
      <h1 className="text-3xl font-bold underline decoration-transparent">
        Space Bird To Do List!
      </h1>
      <h3>Please {mode} to enter</h3>
      <form onSubmit={submitHandler} className={styles.formStyle}>
        <label>Email</label>
        <input type="email" ref={inputEmail} />
        <label>Password</label>
        <input type="password" ref={inputPassword} />
        <button className={styles.btn}>Login</button>
        <Link style={{textDecoration: 'none'}} href='register'><button className={styles.btn}>Register</button></Link>
      </form>
    </div>
  );
}
