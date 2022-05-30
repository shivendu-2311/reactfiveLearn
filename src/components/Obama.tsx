import { useNavigate } from "react-router-dom";

export default function Obama()
{
    const navigate = useNavigate();
    return (<>
        <div>Hello i am Barack Obama</div>
        <button onClick = {()=> navigate("/Sachin")} > Go To Sachin</button>       
         </>);
}