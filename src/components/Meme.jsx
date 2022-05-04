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
    color: "#fff",
    background: "linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)",
    textTransform: "unset",
    borderRadius: 5,
    width: "86%",
    padding: 10,
  },
  container: {
    height: 320,
    padding: "60px 30px 40px ",
  },
  image: {
    width: "92%",
    height: "100%",
  },
});

function Meme() {
  const classes = useStyle();

  // const [data, setData] = useState("");

  const [meme, setMeme] = useState({
    topTex: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // const handleChange = (e) => {
  //   setData(e.target.value);
  // };

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
          // value=""
          // onChange={handleChange}
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
          // value=""
          // onChange={handleChange}
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
      </Box>
    </>
  );
}

export default Meme;
