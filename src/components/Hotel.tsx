import { useEffect } from "react"

interface IHotel{
    name : string,
    cusinee : string,
    featured_image : string,
    id: string
}


export default function Hotels(){

useEffect(()=>{
    async function api(){
        const response = await fetch('./hotels.json')
        const json :{restaurants : IHotel}[] = await response.json();
        console.log(json.map(x => x.restaurants));
    }
    
},[])
return(<div>Hotels</div>);
}