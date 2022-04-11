import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        // borderRadius: 15,
        // margin: '30px 0',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // padding: '10px 50px',
        backgroundColor: "#2a2e30"
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
        marginLeft: '20px'
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        padding: "30px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        }
    },
    navlinks: {
        marginLeft: '20px'
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: "200px"

    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: "100px"
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
        color: "white"
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginLeft: "30px"
    },
}));