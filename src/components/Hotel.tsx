import {AppBar, Button, Card, CardActionArea,  CardContent, CardMedia, CircularProgress, Fab, Grid, makeStyles, TextField, Typography} from "@material-ui/core"
import { IHotel } from "./HotelSlice"
const useStyles = makeStyles({
    image:{
      height : "300px",
      width: "300px"
    }
});
export default function Hotel(props: IHotel){
    const style = useStyles();
    return(
        <Card>
            <CardMedia className={style.image} image={props.featured_image}/>
            <CardContent>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="body1">{props.cuisines}</Typography>
            </CardContent>
        </Card>
    )
}