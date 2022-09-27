import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import People from "@mui/icons-material/People";
import Person from "@mui/icons-material/Person";
import GroupAdd from "@mui/icons-material/GroupAdd";
import Error from "@mui/icons-material/Error";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Logo from "@/icons/Logo";

// import { Selector as SelectorIcon } from '../icons/selector';
// import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
// import { XCircle as XCircleIcon } from '../icons/x-circle';
// import { Logo } from "./logo";
import NavItem from "../NavItem";

const items = [
  {
    href: "/",
    // icon: (<ChartBarIcon fontSize="small" />),
    icon: <BarChartIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/customers",
    icon: <People fontSize="small" />,
    title: "Customers",
  },
  {
    href: "/products",
    icon: <ShoppingBag fontSize="small" />,
    title: "Products",
  },
  {
    href: "/account",
    icon: <Person fontSize="small" />,
    title: "Account",
  },
  {
    href: "/settings",
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <GroupAdd fontSize="small" />,
    title: "Register",
  },
  {
    href: "/404",
    icon: <Error fontSize="small" />,
    title: "Error",
  },
];

const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42 * 2,
                    width: 42 * 2.5,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Demo Inc
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Hi Lynn
                </Typography>
              </div>
              {/* <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              /> */}
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  // big screem
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardSidebar;
