import { useNavigate } from "react-router-dom";

export default function Sachin()
{
    const navigate = useNavigate()
    return(
<>
   <div>Hello i am sachin tendulkar</div>
    <button onClick ={()=>navigate(-1)}>Go back</button>   
</>
    );
}