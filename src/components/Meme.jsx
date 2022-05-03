import React, { useState } from "react";
import { Box, Button, TextField, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  inputBox: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    justifyContent: "space-around",
    height: 100,
  },

  input: {
    padding: "100px  0",
    width: 320,
    border: "none",
  },

  btn: {
    color: "#fff",
    background: "linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%)",
    textTransform: "unset",
    borderRadius: 5,
    width: "86%",
    padding: 10,
  },
});

function Meme() {
  const classes = useStyle();

  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <Box className={classes.inputBox}>
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Top text"
          value=""
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
          value=""
          onChange={handleChange}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
        />
      </Box>

      <Button variant="contained" className={classes.btn}>
        Get a new meme image 🖼
      </Button>
    </>
  );
}

export default Meme;
