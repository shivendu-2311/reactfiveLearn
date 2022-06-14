import {AppBar, Button, Card, CardActionArea,  CardContent, CardMedia, CircularProgress, Fab, Grid, makeStyles, TextField, Typography} from "@material-ui/core"
const useStyles = makeStyles({
    image:{
      height : "300px",
      width: "300px"
    }
});
export default function MaterialUIExample(){
    const style = useStyles();
    return(
<>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled"  error={true} helperText="There is some error"/>
<TextField id="standard-basic" label="Standard" variant="standard" />
<Button variant="outlined" >primary</Button>
<Button variant="contained" >primary</Button>

<Button variant="contained" disableElevation>Disable elevation</Button>
<Typography variant="h4">this is h4</Typography>
<Fab color="primary" variant="extended"> this is fab</Fab>
<Fab color="secondary" variant="extended" >this us fab</Fab>
<div>wait <CircularProgress/></div>
<AppBar position="static">
<Button variant="contained" >primary</Button>
</AppBar>
<Grid spacing={3} >
<Grid>one</Grid>
<Grid>two</Grid>
</Grid>

<Card>
    <CardActionArea>
        <CardMedia image="https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"  className={style.image}/>
        <CardContent>
        <Typography variant="h4">this is h4</Typography>
        </CardContent>
    </CardActionArea>
</Card>
</>
);
}

