import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { ClickAwayListener, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { query } from "../helpers/api";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import LoadingIcon from "./LoadingPageIcon";

const Search = styled("div")(({ theme }) => ({
  color: "#00e019",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.contrastText, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
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
      width: "15ch",
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
  const [loading, setLoading] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickAwayHandler = () => setAnchorEl(null);
  const clickHandler = (e) => {
    // console.log(open);
    setAnchorEl(e.currentTarget);
  };
  const handleInput = async (e) => {
    setResults([]);
    setLoading(true);
    // console.log(e.target.value);
    if (!e.target.value?.length) {
      setLoading(false);

      return;
    }
    // send request to api with search in query
    const data = await query(`/api/search?value=${e.target.value}`);
    if (data.success) {
      setResults(data.results);
    }
    setLoading(false);
  };
  const handleClear = () => {
    setAnchorEl(null);
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
            placeholder="Search Users..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {open && (
          <MyPopper
            id={id}
            {...{ clickAwayHandler, isOpen: open }}
            anchorEl={anchorEl}
          >
            <Paper
              className="popper"
              sx={{ minWidth: 200, padding: 1, border: "1px solid" }}
            >
              <Typography>Results</Typography>
              <Stack spacing={1}>
                {loading && <LoadingIcon />}
                {results.map((res) => (
                  <Box
                    sx={{
                      padding: 1,
                      "&:hover": {
                        backgroundColor: "#003300",
                      },
                    }}
                  >
                    <MUILink
                      component={Link}
                      to={`/@${res.username}`}
                      onClick={handleClear}
                    >
                      <Box sx={{}}>{res.username}</Box>
                    </MUILink>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </MyPopper>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
