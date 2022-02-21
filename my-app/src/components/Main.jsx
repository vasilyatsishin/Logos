import React from "react";
import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Main = () => {
    const [text, setText] = useState()
    
    const getValue = (e) => {
        setText(e.target.value)
    }
    
    return (
        <>
            <Child1 change={getValue}/>
            <Child2 text={text}/>
        </>
    )
}

export default Main