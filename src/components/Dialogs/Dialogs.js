import React from "react";
import style from './dialogs.module.css'
import NameValue from "./NameValue/NameValue"
import Message from "./Message/Message"


const Dialogs = (props) => {


    const arrayName = props.nameData.nameData.map((el) => <NameValue name={el.name} id={el.id}/>);
    const arrayMessage = props.nameData.messageValue.map((el) => <Message message={el.message}/>)

    let addMessage = React.createRef()
    let alertMessage = () => {
        let textAdd = addMessage.current.value;
        alert(textAdd)
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
                <textarea ref={addMessage} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={alertMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs