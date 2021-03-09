import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import backendAPI from "../backendAPI/BackendAPI";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    display: "flex",
    fontWeight: "bold",
  },
  image: {
    height: "60px",
  },
  title: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

function Header() {
  const classes = useStyles();
  const getData = () => {
    backendAPI
      .render()
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem(
            "price",
            JSON.stringify(res.data.allResult.data)
          );
        }
        console.log("call");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getData();
    const timer = setInterval(() => {
      getData();
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Container>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + `/logo.png`}
              alt=""
            />
            <span className={classes.title}>CryptoMart</span>
          </Typography>
        </Container>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
