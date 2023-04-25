import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Icon,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
  Box
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircleButton from "./CircleButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SearchBar from "./searchBar.js";

const CustomSizeTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [maxPage, setMaxPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const CustomRowsPerPage = () => {
    return (
      <FormControl variant="outlined">
        <Select
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          inputProps={{ "aria-label": "rows per page" }}
          style={{
            width: "max-content",
            textAlign: "left",
            height: "30px",
            paddingRight: "10px"
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
    );
  };
  // setMaxPage(Math.ceil(data.lenght / rowsPerPage));

  return (
    <>
      <SearchBar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Course Type</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Students Enrolled</TableCell>
              <TableCell>Instructor Assigned</TableCell>
              <TableCell>Approval Status</TableCell>
              <TableCell>Course Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.enrolled}</TableCell>
                <TableCell>{row.instructor}</TableCell>
                <TableCell>{row.approval}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 2,
          gap: "10px",
          marginTop: "20px",
          height: "40px"
        }}
      >
        <div>Rows per page:</div>
        <CustomRowsPerPage />
        <CircleButton
          children={<DoubleArrowIcon />}
          style={{
            borderRadius: "50%",
            padding: 2,
            backgroundColor: "#bdbebf",
            color: "white",
            height: "100%",
            width: "40px",
            transform: "rotate(180deg)"
          }}
          onClick={() => {
            if (page > 1) setPage(page - 2);
          }}
          disable={page > 1 ? false : true}
        />
        <CircleButton
          children={<NavigateNextIcon />}
          style={{
            borderRadius: "50%",
            padding: 2,
            backgroundColor: "#bdbebf",
            color: "white",
            height: "100%",
            width: "40px",
            transform: "rotate(180deg)"
          }}
          onClick={() => {
            if (page > 0) setPage(page - 1);
          }}
          disable={page > 0 ? false : true}
        />
        <p>{`showing ${page * rowsPerPage} to ${(page + 1) * rowsPerPage}`}</p>
        <CircleButton
          children={<NavigateNextIcon />}
          style={{
            borderRadius: "50%",
            padding: 2,
            backgroundColor: "#bdbebf",
            color: "white",
            height: "100%",
            width: "40px"
          }}
          onClick={() => {
            if (page < Math.ceil(data.length / rowsPerPage)) setPage(page + 1);
          }}
          disable={page < Math.ceil(data.length / rowsPerPage) ? false : true}
        />
        <CircleButton
          children={<DoubleArrowIcon />}
          style={{
            borderRadius: "50%",
            padding: 2,
            backgroundColor: "#bdbebf",
            color: "white",
            height: "100%",
            width: "40px"
          }}
          onClick={() => {
            if (page < Math.ceil(data.length / rowsPerPage) - 1)
              setPage(page + 2);
          }}
          disable={
            page < Math.ceil(data.length / rowsPerPage) - 1 ? false : true
          }
        />
      </Box>
    </>
  );
};

export default CustomSizeTable;
