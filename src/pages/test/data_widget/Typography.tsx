import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function TypographyTheme() {
  return (
    <>
      <Div>{"This div's text looks like that of a button."}</Div>;
      <Typography variant="h3">Responsive h3</Typography>
    </>
  );
}
