import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import image from "../images/troll.png";

const useStyle = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 5,
    background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
    color: "white",
  },

  img: {
    height: "100%",
    marginRight: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 600,
  },
});

function Header() {
  const classes = useStyle();

  return (
    <Box className={classes.header}>
      <img src={image} alt="img" className={classes.img} />
      <Typography variant="h5" className={classes.heading}>
        Meme Generator
      </Typography>
    </Box>
  );
}

export default Header;
