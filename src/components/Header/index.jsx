import React from "react";
import { Typography, Box, Button } from "@mui/material";

import style from "./Header.module.css";

// eslint-disable-next-line react/prop-types
const Header = ({ title, subtitle }) => {
  // eslint-disable-next-line react/prop-types
  const lowerTitle = title.toLowerCase();
  return (
    <Box className="flex items-center">
      <Button
        className={style.textdark}
        href={`/${lowerTitle !== "home" ? lowerTitle : ""}`}
      >
        {title}
      </Button>
      <Typography className={`${style.slashdark} flex content-center`}>
        /
      </Typography>
      <Button className={style.textlight} disabled>
        {subtitle}
      </Button>
    </Box>
  );
};

export default Header;
