import React from "react";
import { useState } from "react";
import stylesButton from "../components/Button.module.css"
const Button = ({className = "someButton", text}) => {
    let createButton
    const [textik, setText] = useState(text)
    const [classik, setClass] = useState("button " + className)

    const ChangeClass = () => {
        const type = prompt("Type a class for button")
        setText(type)
    }

    const ChangeText = () => {
        const type = prompt("Type a text for button")
        setClass(type)
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
        createButton = <button className={stylesButton[className]} onClick={ChangeClass}>{textik}</button>
    } else if (text === "I Am 2"){
        createButton = <button className={stylesButton[className]} onClick={ChangeText}>{textik}</button>
    } else if(text === "I Am 3"){
        createButton = <button className={stylesButton[className]} onClick={LogText}>{textik}</button>
    } else if(text === "I Am 4"){
        createButton = <button className={stylesButton[className]} onClick={AlertText}>{textik}</button>
    } else if(text == "I Am 5"){
        createButton = <button className={stylesButton[className]} onClick={ChangeAll}>{textik}</button>
    }
    

    return (
        <>  
            {createButton}
        </>
    )
}

export default Button