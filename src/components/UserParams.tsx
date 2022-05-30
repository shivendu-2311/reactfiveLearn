import { useParams } from "react-router-dom";

export default function UserParams()
{
    const userParams = useParams<{userId: string}>();
    return <div>{"user params " + userParams.userId}</div>
}