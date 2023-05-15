import { useState } from "react";
const Calculator=()=>{
    const[first,setFirst]=useState();
    const[second,setSecond]=useState();
    const[sum,setSum]=useState();
    const Plus=()=>{
        setSum(parseInt(first)+parseInt(second));
    }
    const Minus=()=>{
        setSum(parseInt(first)-parseInt(second));
    }
    return(
        <div>
            <input type="text" onChange={(e)=>setFirst(e.target.value)}/>
            <input type="text" onChange={(e)=>setSecond(e.target.value)}/>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
            <p>{sum}</p>
        </div>
    )
}
export default Calculator;