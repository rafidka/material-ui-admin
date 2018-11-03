import React from "react";
import { Home } from "../Home";
import { Inbox } from "../Inbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";

export const PAGES = [
  {
    component: Home,
    icon: <HomeIcon />,
    name: "Home",
    path: "/"
  },
  {
    component: Inbox,
    icon: <MailIcon />,
    name: "Inbox",
    path: "/inbox"
  }
];
