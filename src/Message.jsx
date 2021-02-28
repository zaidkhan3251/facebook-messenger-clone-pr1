import React, {forwardRef} from 'react'
import {Card, CardContent,Typography} from '@material-ui/core';
import './Message.css'
// import { forwardRef } from 'react';

const  Message= forwardRef(({message,username},ref)=>{
    const isUser=username===message.username
    console.log(message.username,"msgusr")
    return (
        <div ref={ref} className={`message ${isUser && "message_user"}`}>
            <Card className={isUser? "message_userCard" : "message_guestCard"} >
      <CardContent>
        <Typography color="white" variant="h5" component="h2">
        {!isUser && `${message.username || "unknown User"}: `} {message.message}
        </Typography>
      </CardContent>
    </Card>
            
        </div>
    )
})  

export default Message 