import React from "react";
import style from './dialogs.module.css'
import NameValue from "./NameValue/NameValue"
import Message from "./Message/Message"
import {addMessageActionCreate, updateMessageActionCreate} from "../../redux/message-reducer";


const Dialogs = (props) => {

    const arrayName = props.nameData.nameData.map((el) => <NameValue name={el.name} id={el.id}/>);
    const arrayMessage = props.nameData.messageValue.map((el) => <Message message={el.message}/>)

    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreate())
    }

    let onChange = () => {
        let newMessage = newMessageElement.current.value
        props.dispatch(updateMessageActionCreate(newMessage))
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
                <textarea ref={newMessageElement}
                          onChange={onChange}
                          value={props.newDialogsMessage}

                ></textarea>
                <button onClick={addNewMessage}>Add Message</button>
            </div>
        </div>
    )
}
export default Dialogs