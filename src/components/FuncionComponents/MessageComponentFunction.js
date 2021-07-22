import React from 'react';
import style from '../../style/AddMessage.module.css';
import {ListItem, ListItemText} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';



const  MessageComponentFunction = (props) =>{

        return (<>
            <ListItem>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText className={style.listText}
                                      align="right"
                                      primary={props.text}/>
                    </Grid>
                    <Grid item xs={12}>
                        <span className={style.listAuthor}>{props.author}</span>

                    </Grid>
                </Grid>
            </ListItem>
            </>
        );
}

MessageComponentFunction.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}



export default React.memo(MessageComponentFunction)