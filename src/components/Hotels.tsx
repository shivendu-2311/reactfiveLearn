import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import Hotel from "./Hotel";
import { IHotel , setHotels } from "./HotelSlice";

export default function Hotels(){
const dispatch = useDispatch();
const data = useSelector((x: AppState) => x.hotelSlice);
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotels.json")
            const json :{restaurant : IHotel}[] = await response.json();
           dispatch(setHotels(json.map(x => x.restaurant)));
        }
        api();
    },[dispatch]);
    return(<>
    {data.map(x => <Hotel {...x}/>)}
    
    </>);
}