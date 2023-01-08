import { ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import React from "react";
import { useState } from "react";
import database from "./firebase_config";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Todo = (props) => {
  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  const toggle = () => {
    const inprogress_ref = doc(database, "todos", props.id);
    updateDoc(inprogress_ref, {
      inprogress: !props.inprogress,
    });
  };

  const deleteTodo = () => {
    deleteDoc(doc(database, "todos", props.id));
  };

  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        marginTop: "1%",
        alignItems: "center",
        fontSize: "200px",
      }}
    >
      <ListItem style={{ color: "white" }}>
        <ListItemText
          style={{ color: "white" }}
          primary={props.todo}
          secondary={props.inprogress ? "InPorgress" : "Completed"}
        />
      </ListItem>

      <Button
        style={{ width: "2%", height: "2%" }}
        variant="contained"
        onClick={toggle}
        type="submit"
      >
        {props.inprogress ? "Done" : "UnDone"}
      </Button>
      <Button
        style={{
          width: "2%",
          height: "2%",
          marginLeft: "2%",
          color: "#FBF1D3",
        }}
        variant="contained"
        onClick={deleteTodo}
      >
        X
      </Button>
    </div>
  );
};

export default Todo;
