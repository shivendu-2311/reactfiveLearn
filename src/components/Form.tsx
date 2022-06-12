import Button from "./Button";
import  "../App.css";
import { useState } from "react";
export default function Form(){
const [first, setFirst] = useState<number>(0);
const [second, setSecond] = useState<number>(0);
const [result, setResult] = useState<number>(0);
    return (
        <div>
         <input type="number" placeholder="type first number" 
         value={first} onChange={
              (e)=>{
                  setFirst(parseInt(e.target.value))
              }
            }
            />
         <input type="number" placeholder="type second number" 
         value= {second} onChange={
             (e)=> {
                 setSecond(parseInt(e.target.value))
             }
         }
         />
          <Button text="add" className="addButton" onClick={()=>setResult(first + second)} />
          <Button text="sub" className="subButton"  onClick={()=>setResult(first - second)} />
          <label>{result}</label>
        </div>
    );
}