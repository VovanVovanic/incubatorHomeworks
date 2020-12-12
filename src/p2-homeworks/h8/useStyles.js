import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  paper: {
    display: "flex",
    padding: "5px",
    width: '600px',
    marginBottom: "10px",
    height: "30px",
    justifyContent: "space-around",
    backgroundColor: "#63d471",
    color: "blue",
    fontWeight: "bold",
    backgroundImage: "linear- gradient(315deg, #63d471 0 %, #233374 %)",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  wrapper: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: " 100px 20px 20px 20px",
    height: "100vh",
    backgroundColor: "#abe9cd",
    backgroundImage: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)",
  },
  headers: {
    display: "flex",
    padding: "5px",
    marginBottom: "10px",
    height: "40px",
    justifyContent: "space-around",
    color: "yellow",
    fontWeight: "bold",
    backgroundColor: '#36096d',
    backgroundImage: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)'
  },
  thronesItem: {
    backgroundColor: '#537895',
    backgroundImage: 'linear-gradient(315deg, #537895 0%, #09203f 74%)',
    color: 'yellow'
  },
  verticalButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '230px',
    marginLeft: '30px',
    fontSize: '20px'
  }
});
