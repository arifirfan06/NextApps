This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started REST API & Web Architecture

The main stacks are **Next.js , Firebase, and Redux**

## REST API

### 1. Login

Method: POST

URL: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAFRXm7fY0YkyUW_sAkhxGwJdb_3Ldw5M

Header: -

Params: -

Body: {
        email: "enrio@gmail.com",
        password: 'ririo554',
        returnSecureToken: true,
      }

### 2. Register

Method: POST

URL: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAAFRXm7fY0YkyUW_sAkhxGwJdb_3Ldw5M

Header: -

Params: -

Body: {
        email: "enrio@gmail.com",
        password: 'ririo554',
        returnSecureToken: true,
      }

### 3. Get List

Method: GET

URL: https://todo-binar-react-default-rtdb.asia-southeast1.firebasedatabase.app/toDo/${id}.json

Header: -

Params: id (user ID)

Body: -

### 4. Edit List

Method: PUT

URL: https://todo-binar-react-default-rtdb.asia-southeast1.firebasedatabase.app/toDo/${id}.json

Header: -

Params: id (user ID)

Body: {
      userToDo: ['Have lots of money', 'Work remotely'],
    };


## Web Architecture

The simple project using redux with only auth reducer that work simmilar as single useState. the auth reducer work to handle todolist array that contain the item. 

The app is using Next.js with latest app routing feature. The pages are login, register, and to-do

The backend is using firebase as BaaS to handle the database and authentication with email and password.






