import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb({ locations }) {
  // console.log(locations);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {locations?.map((loc, i) => {
        return (
          <Link key={i} color="inherit" href="/" onClick={handleClick}>
            {loc}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
