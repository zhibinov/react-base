import React, {useState, useEffect} from 'react';
import AddMessage from "./AddMessageFunction";
import {AUTHORS} from "../../const/const";
import MessageComponentFunction from "./MessageComponentFunction";
import {Message} from "@material-ui/icons";



const MessageFunction = () => {
    const [text, setText] = useState([])
    const [newText, setNewText] = useState('')


    const submitNewMessage = () => {

        setText((currentText) => [
            ...currentText, {author: AUTHORS.ME, text: newText}
        ])
        setNewText('')
    }

    const changeNewMessage = (newText) => {
        setNewText(newText)
    }

    useEffect(() => {
        if (text.length && text[text.length - 1].author !== AUTHORS.BOT) {
            setTimeout(() =>
                    setText((currenMessage) => [
                            ...currenMessage,
                            {text: 'Не приставай ко мне, я робот!', author: AUTHORS.BOT}
                        ]
                    ),
                2000);
        }
    }, [text])



    const listMessage = text.map((message, index) => (
        <MessageComponentFunction
            key={index}
            text={message.text}
            author={message.author}/>))


    return (
        <div>
            <AddMessage
                listMessage={listMessage}
                newMessage={newText}
                onChange={changeNewMessage}
                onSubmit={submitNewMessage}
            />
        </div>

    );
}

export default MessageFunction
