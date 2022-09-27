import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);
  const [checked2, setChecked2] = React.useState([true, false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, checked2[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked2[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked2[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked2[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked
        size="small"
        color="secondary"
        onChange={handleChange}
      />
      <Checkbox
        {...label}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      <div>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked2[0] && checked2[1]}
              indeterminate={checked2[0] !== checked2[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </div>
    </div>
  );
}
