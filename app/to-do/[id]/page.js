"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./todo.module.css";
import ModalItem from "@/components/modal/ModalToDoItems";
import { useSelector, useDispatch } from "react-redux";
import { addList, removeList, firstList } from "@/store/auth";
import axios from "axios";
export default function ToDo({ params }) {
  //   const [sendList, updateSendList] = useState([]);
  const router = useRouter();
  const [inputToDo, updateInput] = useState("");
  const toDoList = useSelector((state) => state.user.list);
  const tokenRedux = useSelector((state) => state.user.id);
  const id = params.id;
  const dispatch = useDispatch();

  const firstFetch = async () => {
    const response = await axios.get(
      `https://todo-binar-react-default-rtdb.asia-southeast1.firebasedatabase.app/toDo/${id}.json`
    );
    console.log("firstFetch", response);
    if (response.data) {
      dispatch(firstList({ item: response.data.userToDo }));
    }
  };

  useEffect(() => {
    // console.log('new', toDoList)
    if (!tokenRedux) {
      return router.push("/");
    }
    // updateToDos()
    firstFetch();
  }, []);

  const updateToDos = async () => {
    const putdata = {
      userToDo: toDoList,
    };
    try {
      const response = await axios.put(
        `https://todo-binar-react-default-rtdb.asia-southeast1.firebasedatabase.app/toDo/${id}.json`,
        putdata
      );
      console.log("update", response);
    } catch (err) {
      alert(err.response.data.error.message);
    }
  };

  useEffect(() => {
    if (toDoList.length > 0) {
      updateToDos();
    }
  }, [toDoList]);

  const itemRemove = (item) => {
    console.log("clicked", item);
    dispatch(removeList({ item: item }));
  };

  const inputChange = (e) => {
    // console.log(e.target.value)
    updateInput(e.target.value);
  };

  const addHandler = () => {
    console.log(inputToDo);
    dispatch(addList({ item: inputToDo }));
    // updateToDos();
    updateInput("");
  };

  //   console.log("tokeninRedux", tokenRedux);

  return (
    <div className={styles.mainContainer}>
      <h1 style={{fontSize: '16px'}}>Lets aim beyond the sky with <span style={{fontSize: '20px'}}>Space Bird</span></h1>
      <h2 style={{fontSize: '14px'}}>Your user id is {id}</h2>
      <div className={styles.add}>
        <input
          onChange={inputChange}
          value={inputToDo}
          className={styles.inputStyle}
        />
        <button className={styles.btn} onClick={addHandler}>
          Add
        </button>
      </div>
      {toDoList.map((item, index) => (
        <ModalItem key={index} removeHandler={() => itemRemove(item)}>
          {item}
        </ModalItem>
      ))}
    </div>
  );
}
