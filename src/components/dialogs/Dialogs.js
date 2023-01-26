import React from "react";
import style from './dialogs.module.css'
import NameValue from "./NameValue/NameValue"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let state = props.dialogs

    const arrayName = state.nameData.map((el) => <NameValue name={el.name} id={el.id}/>);
    const arrayMessage = state.messageValue.map((el) => <Message message={el.message}/>)

    let newMessageBody = state.newDialogsMessage

    let addNewMessage = () => {
        props.addMessage()
    }

    let onChange = (textAreaValue) => {
        let newMessage = textAreaValue.target.value
        props.updateNewMessageBody(newMessage)
    }

    return (
        <div className={style.wrapperDialogMenu}>
            <div className={style.dialogs}>
                {arrayName}
            </div>
            <div className={style.messages}>
                {arrayMessage}
            </div>

            <div className={style.form}>
                <textarea value={newMessageBody}
                          onChange={onChange}
                          placeholder={'Enter your message'}
                ></textarea>
                <button onClick={addNewMessage}>Add Message</button>
            </div>
        </div>
    )
}
export default Dialogs