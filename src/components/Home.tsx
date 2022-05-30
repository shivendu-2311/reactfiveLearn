import { useNavigate } from "react-router-dom"

export default function Home()
{
    const navigate = useNavigate();
    return <div>
        Hello u re at home sir
        <button onClick = {()=> navigate("/Sachin")} > Go To Sachin</button> 
        <button onClick = {()=> navigate("/donald")} > Go To Trump</button>  
    </div>
}