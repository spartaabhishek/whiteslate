import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function Sidenav(props) {
  const classes = useStyles();
  const [text, handleText] = React.useState("");

  // const handleClick = () => {
  //   setOpen((prev) => !prev);
  // };

  // const handleClickAway = () => {
  //   setOpen(false);
  // };
  return (
    <div>
      <div className="sidenav">
        <h3>Tools</h3>
        <input
          className="brushRadius"
          type="text"
          value={text}
          onChange={(t) => handleText(t.target.value)}
        />
        <button className="btn" onClick={() => props.brushRadius(text)}>
          Submit
        </button>
        <button>Clear</button>
        {/* <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}
        >
          <div className={classes.root}>
            <IconButton onClick={handleClick}>
              <CreateTwoToneIcon></CreateTwoToneIcon>
            </IconButton>

            {open ? (
              <div className={classes.dropdown}>
                <ul>
                  <li value="1" onPress={props.brushRadius(1)}>1</li>
                  <li value="2" onPress={props.brushRadius(2)}>2</li>
                  <li value="3" onPress={props.brushRadius(3)}>3</li>
                </ul>
              </div>
            ) : null}
          </div>
        </ClickAwayListener> */}
      </div>
    </div>
  );
}
