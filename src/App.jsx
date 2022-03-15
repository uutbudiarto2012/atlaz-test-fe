import { useEffect, useState } from 'react';
import './App.css';
import Recorder from './Recorder';
import Screenshoot from './Screenshoot';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("http://localhost:5000/api/v1/auth/login/success", {
  //       method: 'GET',
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true
  //       }
  //     }).then(response => {
  //       if (response.status === 200) return response.json()
  //       throw new Error("login gagal brohh")
  //     }).then(obj => {
  //       setUser(obj.user)
  //     }).catch(err => console.log(err))
  //   }
  //   getUser()
  // }, []);
  // const loginGoogle = () => {
  //   window.open("http://localhost:5000/api/v1/auth/google", "_self")
  // }



  return (
    <div className='wrapper'>
      <Recorder />
    </div>
  );
}

export default App;
