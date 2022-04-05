import React from "react";
import { useState } from "react";
import stylesButton from "../components/Button.module.css"
const Button = ({className, text}) => {
    let createButton
    const [textik, setText] = useState(text)
    const [classik, setClass] = useState(stylesButton[className])

    const ChangeClass = () => {
        const type = prompt("Type a class for button")
        setClass(type)
    }

    const ChangeText = () => {
        const type = prompt("Type a text for button")
        setText(type)
    }

    const LogText = () => {
        console.log(textik);
    }

    const AlertText = () => {
        alert(textik);
    }

    const ChangeAll = () => {
        const typeText = prompt("Type a text")
        const typeClass = prompt("Type a class")
        setText(typeText)
        setClass(typeClass)
    }

    if (text === "I Am 1") {
        createButton = <button className={classik} onClick={ChangeClass}>{textik}</button>
    } else if (text === "I Am 2"){
        createButton = <button className={classik} onClick={ChangeText}>{textik}</button>
    } else if(text === "I Am 3"){
        createButton = <button className={classik} onClick={LogText}>{textik}</button>
    } else if(text === "I Am 4"){
        createButton = <button className={classik} onClick={AlertText}>{textik}</button>
    } else if(text === "I Am 5"){
        createButton = <button className={classik} onClick={ChangeAll}>{textik}</button>
    }
    

    return (
        <>  
            {createButton}
        </>
    )
}

export default Button