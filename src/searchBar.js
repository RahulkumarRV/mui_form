import { InputBase, IconButton, Paper, Box, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircleButton from "./CircleButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from "@mui/icons-material/Add";

const SearchPanel = () => {
  return (
    <Paper
      sx={{
        padding: "25px",
        marginBottom: "10px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "40px;"
        }}
      >
        <Box
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            backgroundColor: "#f2f2f2",
            flex: 1
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <ButtonBase
          sx={{
            display: "flex",
            gap: "10px"
          }}
        >
          <FilterListIcon />
          <p>Filter</p>
        </ButtonBase>

        <ButtonBase
          sx={{
            display: "flex",
            gap: "10px"
          }}
        >
          <SortIcon />
          <p>Sort</p>
        </ButtonBase>
      </Box>
      <ButtonBase
        sx={{
          color: "#345eeb",
          marginTop: "20px"
        }}
      >
        <AddIcon />
        <p>Add Courses</p>
      </ButtonBase>
    </Paper>
  );
};

export default SearchPanel;
