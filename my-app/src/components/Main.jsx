import React from "react";
import Child1 from "./Child1";

const Main = () => {
    const Change = (e) => {
        var i = e.target.value
        console.log(i);
    }

    return (
        <>
            <Child1 change={Change}/>
            {/* <h1>{i}</h1> */}
        </>
    )
}

export default Main