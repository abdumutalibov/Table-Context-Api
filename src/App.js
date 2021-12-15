
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [newImg, setNewImg] = useState('');

const [users, setUsers] = useState([]);
const usersCollectionRef = collection(db, 'users');

const createUser = async () => {
await addDoc(usersCollectionRef , { name:newName, age: Number(newAge), image:newImg });
}

const updataUser = async (id, age) => {
const userDoc = doc(db, 'users', id);
const newFields = {age: age + 1};
await updateDoc(userDoc, newFields);
};

const deleteUser = async (id) => {
const userDoc = doc(db, 'users', id);
await deleteDoc(userDoc);
}

useEffect(() => {
  const getUsers = async () => {
const data = await getDocs(usersCollectionRef);
setUsers(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
console.log(data);

  }
getUsers()

}, [])

  return (
    <div className="App">
      <input placeholder='Name...' onChange={(event) => {setNewName(event.target.value)}}/>
      <input type='number' placeholder='Age...' onChange={(event) => {setNewAge(event.target.value)}}/>
      <input type='text' placeholder='img...' onChange={(event) => {setNewImg(event.target.value)}}/>
      <button onClick={createUser}>Create User</button>
    {users.map((user) => {
      return (
        <div>
          {" "}
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <img style={{width:'300px', heigth:'300px'}} src={user.image}/>
          <button onClick={() => {
            updataUser(user.id, user.age);
          }}> Increase age</button>
          <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
        </div>
      )
    })}
    </div>
  );
}

export default App;