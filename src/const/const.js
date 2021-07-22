import {makeStyles} from "@material-ui/core/styles";

export const AUTHORS = {
    ME: "Мартин Силен",
    BOT: 'Bot'

}

export const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh',

    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '60vh',
        overflowY: 'auto',
        backgroundColor: '#e8eaf5'
    },
    btn:{
        width: '63px'
    }
});