import React from 'react';
import { ListItemText, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import style from '../../style/AddMessage.module.css';
import { useStyles } from "../../const/const";


const AddMessageFunction = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit()
        console.log(e)
    }


    const classes = useStyles()
    let newText = props.newMessage

    return (
        <div>
            <div className={style.wrapperChat}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={style.headerMessage}>Chat Geekbrains</Typography>
                    </Grid>
                </Grid>
                <Grid container component={Paper} className={classes.chatSection}>
                    <Grid item xs={3} className={classes.borderRight500}>
                        <h1>Created chats:</h1>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <Avatar alt="#"
                                        src="https://yt3.ggpht.com/a/AATXAJxnmWzcFMTNjX43-9r3Ujps9JoAJ6_-mbxbO2rC=s900-c-k-c0xffffffff-no-rj-mo" />
                                </ListItemIcon>
                                <span className={style.textElement}> Chat 1 </span>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Avatar alt="#"
                                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/053e22db-ee81-4773-9d01-2a8891151aeb/dbqg8wi-9e5db056-bc4f-4dea-b9b7-bb000d206e26.png/v1/fill/w_894,h_894,q_75,strp/creepy_discord_icon___logo_remix_by_treetoadart-dbqg8wi.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wNTNlMjJkYi1lZTgxLTQ3NzMtOWQwMS0yYTg4OTExNTFhZWIvZGJxZzh3aS05ZTVkYjA1Ni1iYzRmLTRkZWEtYjliNy1iYjAwMGQyMDZlMjYucG5nIiwid2lkdGgiOiI8PTg5NCIsImhlaWdodCI6Ijw9ODk0In1dXX0.kzhAG8lkmSYnMEWs-8hD4uPc-RTrU2OtGmIiUFECd5A" />
                                </ListItemIcon>
                                <span className={style.textElement}> Chat 2 </span>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Avatar alt="#"
                                        src="https://yt3.ggpht.com/a/AATXAJyouE5pCIcyPNIovM6ZQbopYQ_uxu__JH74ktFF=s900-c-k-c0x00ffffff-no-rj" />
                                </ListItemIcon>
                                <span className={style.textElement}> Chat 3 </span>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List style={{ 'overflowY': "scroll", 'height': '328px' }}>
                            {props.listMessage}
                        </List>
                        <Grid container style={{ padding: '20px' }}>
                            <form className={style.formAction} action="#" onSubmit={handleSubmit}>
                                <TextField value={newText}
                                    onChange={handleChange}
                                    id="outlined-basic-email"
                                    label="Enter a message"
                                    required
                                    autoFocus={true}
                                    fullWidth />
                                <Fab className={classes.btn}
                                    type="submit"
                                    color="primary"
                                    aria-label="add"><SendIcon /></Fab>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}
export default AddMessageFunction;