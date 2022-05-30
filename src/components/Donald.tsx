import { Navigate, useNavigate } from "react-router-dom";

export default function Donald()
{
    const navigate = useNavigate();
    return ( 
        <>
        <div>Hello i am donald fukin trump</div>
        <button onClick = {()=> navigate("/sachin")} > Go To Sachin</button>       
         </>
    );
}