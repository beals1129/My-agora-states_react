import './App.css';
import Form from './component/Form';
import ListContainer from './component/ListContainer';
import { useEffect, useState } from 'react';
function App() {
  const [submit, setSubmit] =useState(true)
  const [agoraList, setAgoraList] = useState([])
  useEffect(()=>{
    getAgora()
  },[])
  
  const getAgora =() =>{
    let url = `http://localhost:4000/discussions`
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      setAgoraList(res)})
  }

  const addAgora = (newAgora) => {
    console.log(newAgora)
    fetch("http://localhost:4000/discussions", {
      method: "POST",
      body: JSON.stringify(newAgora),
      headers: {
        "Content-Type": "application/json",
      },
    }) //
      .then(() => getAgora())
  }
  
  return (
    <main>
        <h1>My Agora States</h1>
        <Form addAgora={addAgora}/>
        <ListContainer list={agoraList}/>
    </main>
  );
}

export default App;
