import "../styles.css";
import { SearchInterface } from "../interfaces";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

//Search: Component form to search for Pexel images.
export default function Search(searchProps: SearchInterface) {
  return (
    <div className="search-box">
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "90%",
          padding: "8px"
        }}
        onSubmit={(evt) => {
          evt.preventDefault();
          searchProps.handleSubmit();
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for Photos"
          onChange={(evt) => searchProps.updateSearch(evt.target.value)}
          inputProps={{ "aria-label": "search images" }}
          value={searchProps.input}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton
          onClick={(evt) => {
            evt.preventDefault();
            searchProps.handleSubmit();
          }}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
