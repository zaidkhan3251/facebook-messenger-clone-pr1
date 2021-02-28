import {useState ,useEffect} from "react"
import { Button,Input,FormControl,InputLabel} from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  
  const [input, setInput] = useState("");
  console.log(input);

  const [messages, setMessages] = useState([{username:"Zaid",message:"hey"},{username:"Khan",message:"hello"}]);
  console.log(messages)
  const [username, setUsername] = useState("")
  
  useEffect(() => {
    db.collection('messages')
    .orderBy("timestamp",'desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
    })  
  }, [input])



  useEffect(() => {
    setUsername(prompt("Please Enter Your Name!"))
  }, [])

  const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")

  }
  return (
    <div className="App">
      <img src="./images/logo.png"/>
      <h1>Designed & develop by Zaid khan 🚀</h1>
      <h3> WelCome! {username}</h3>
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel >Send Messages...</InputLabel>
          <Input className="app_input" value={input} onChange={event=>setInput(event.target.value)}/>
          <IconButton className="app_iconButton" onClick={sendMessage} disabled={!input} variant="contained" color="primary" type="submit" ><SendIcon/></IconButton>
          
          {/* <Button onClick={sendMessage} disabled={!input} variant="contained" color="primary" type="submit">Send message</Button> */}
        </FormControl>
      </form>
      
      <FlipMove>
        {messages.map(({ id,message})=>(
        <Message  key={id} message={message} username={username}/>
      ))}
      </FlipMove>
      
    </div>
  );
}

export default App;
//  npm install @material-ui/core

