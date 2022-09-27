import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";

import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import People from "@mui/icons-material/People";
import Person from "@mui/icons-material/Person";
import GroupAdd from "@mui/icons-material/GroupAdd";
import Error from "@mui/icons-material/Error";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import LogoIcon from "@/icons/Logo";

import NavItem from "../NavItem";

const linkItems = [
  {
    href: "/",
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

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <a>
        <LogoIcon
          sx={{
            height: 42 * 2,
            width: 42 * 2.5,
          }}
        />
      </a>
    </NextLink>
  );
};

const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    // hide sidebar in small screen by default
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

  const userInfo = (
    <Box
      //   sx={{
      //     alignItems: "center",
      //     backgroundColor: "rgba(255, 255, 255, 0.04)",
      //     cursor: "pointer",
      //     display: "flex",
      //     justifyContent: "space-between",
      //     px: 3,
      //     py: "11px",
      //     borderRadius: 1,
      //   }}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        padding: 11px 24px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.04);
      `}
    >
      <div>
        <Typography color="inherit" variant="subtitle1">
          Demo Inc
        </Typography>
        <Typography color="neutral.400" variant="body2">
          Hi Lynn
        </Typography>
      </div>
    </Box>
  );

  const content = (
    <Box
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}
    >
      <div>
        <Box sx={{ p: 3 }}>
          <Logo />
        </Box>
        <Box sx={{ px: 2 }}>{userInfo}</Box>
      </div>
      <Divider
        sx={{
          borderColor: "#2D3748",
          my: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {linkItems.map((item) => (
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
  );

  return (
    <Drawer
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      onClose={isLargeScreen ? null : onClose}
      open={isLargeScreen ? true : open}
      sx={isLargeScreen ? {} : { zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant={isLargeScreen ? "permanent" : "temporary"}
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
