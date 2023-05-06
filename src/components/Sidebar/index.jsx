import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Side } from "../../assets/icons";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("selected_language") || "az");
  }, ["az", "en", "ru"]);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <HomeIcon className="cursor-pointer hover:text-red-600 hover:animate-pulse decoration-gray-700 transition duration-300" />
            </ListItemIcon>
            <ListItemText className="hover:bg-gradient-to-r from-neutral-300 to-stone-400 transition duration-200" primary={t("home")} />
          </ListItemButton>
        </ListItem>
        {[`about`, `products`, `contact`].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={`/${text}`}>
              <ListItemIcon>
                {index === 0 && <InfoIcon className="cursor-pointer hover:text-red-600 hover:animate-pulse decoration-gray-700 transition duration-300" />}
                {index === 1 && <LocalMallIcon className="cursor-pointer hover:text-red-600 hover:animate-pulse decoration-gray-700 transition duration-300" />}
                {index === 2 && <ContactPhoneIcon className="cursor-pointer hover:text-red-600 hover:animate-pulse decoration-gray-700 transition duration-300" />}
              </ListItemIcon>
              <ListItemText className="hover:bg-gradient-to-r from-neutral-300 to-stone-400 transition duration-200" primary={t(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <Side />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
