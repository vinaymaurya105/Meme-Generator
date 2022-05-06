import React, { useState } from "react";
import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import { memesData } from "../Data/Data";

const useStyle = makeStyles({
  inputBox: {
    display: "flex",
    alignItems: "center",
    padding: 21,
    justifyContent: "space-around",
    height: 100,
  },

  input: {
    padding: "100px  0",
    width: 320,
    border: "none",
    height: 8,
  },

  btn: {
    background: "linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)",
    textTransform: "unset",
    borderRadius: 5,
    width: "86%",
    padding: 10,
    color: "#ffffff",
  },
  container: {
    height: 320,
    padding: "60px 30px 40px ",
    position: "relative",
    color: "#fff",
  },
  image: {
    width: "92%",
    height: "100%",
  },
  topTxt: {
    position: "absolute",
    top: 60,
    left: "50%",
    transform: "translate(-50%)",
  },

  bottomTxt: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%)",
  },
});

function Meme() {
  const classes = useStyle();

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMeme((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClick = () => {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const newUrl = memesArray[randomNum].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: newUrl,
      };
    });
  };

  return (
    <>
      <Box className={classes.inputBox}>
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
      </Box>

      <Button variant="contained" className={classes.btn} onClick={handleClick}>
        Get a new meme image 🖼
      </Button>

      <Box className={classes.container}>
        <img src={meme.randomImage} alt="" className={classes.image} />
        <h2 className={classes.topTxt}>{meme.topText}</h2>
        <h2 className={classes.bottomTxt}> {meme.bottomText}</h2>
      </Box>
    </>
  );
}

export default Meme;
