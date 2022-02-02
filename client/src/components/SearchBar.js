import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { ClickAwayListener, Paper } from "@mui/material";
import { useState } from "react";
import { query } from "../helpers/api";

const Search = styled("div")(({ theme }) => ({
  color: "#00e019",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#121212", 0.15),
  "&:hover": {
    backgroundColor: alpha("#151515", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#00e019",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MyPopper = ({ isOpen, clickAwayHandler, anchorEl, children }) => (
  <Popper open={true} anchorEl={anchorEl}>
    {children}
  </Popper>
);

const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [results, setResults] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickAwayHandler = () => setAnchorEl(null);
  const clickHandler = (e) => {
    console.log(open);
    setAnchorEl(e.currentTarget);
  };
  const handleInput = async (e) => {
    console.log(e.target.value);
    if (!e.target.value) return;
    const data = await query(`/api/search?value=${e.target.value}`);
    if (data.success) {
      setResults(data.results);
    }
    // send request to api with search in query
  };
  const id = open ? "simple-popper" : undefined;
  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <div>
        <Search onClick={clickHandler}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onInput={handleInput}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {open && (
          <MyPopper
            id={id}
            {...{ clickAwayHandler, isOpen: open }}
            anchorEl={anchorEl}
          >
            <Paper className="popper">
              {results.map((res) => (
                <div>{res.username}</div>
              ))}
            </Paper>
          </MyPopper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
