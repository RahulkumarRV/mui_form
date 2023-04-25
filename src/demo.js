import {
  Paper,
  Box,
  ButtonBase,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useRef, useState } from "react";
import Editor from "./Editor";

const useStyles = makeStyles({
  main_container: {
    padding: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  courseInput: {
    height: "40px",
  },
  descInput: {
    height: "40px",
  },
  upload_container: {
    width: "150px",
    height: "150px",
    border: "1px solid lightgrey",
  },
});

function Demo() {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  const options = ["course 1", "course 2", "course 3"];

  return (
    <Paper className={classes.main_container}>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            flex: 2,
          }}
        >
          <label>Course Name</label>
          <TextField
            placeholder="Enter Course Name"
            InputProps={{ classes: { root: classes.courseInput } }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            flex: 3.5,
          }}
        >
          <label>Description</label>
          <TextField
            placeholder="Enter Description"
            InputProps={{ classes: { root: classes.descInput } }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          id="file-select"
          style={{
            display: "none",
          }}
          onChange={handleFileInputChange}
        />
        <label htmlFor="file-select">Upload Image</label>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {!selectedFile ? (
            <ButtonBase
              htmlFor="file-select"
              sx={{
                width: "150px",
                height: "150px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <Typography variant="body2">
                Upload file from <br /> local
              </Typography>
              <p style={{ color: "lightgrey" }}>Or</p>
              <Typography variant="body2">
                Select file from <br /> Server
              </Typography>
            </ButtonBase>
          ) : (
            <Box
              sx={{
                width: "150px",
                height: "150px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={selectedFile}
                alt={"image"}
              />
            </Box>
          )}
          {selectedFile && (
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                color: "blue",
              }}
            >
              <FileCopyIcon /> {selectedFile.name}
            </Typography>
          )}
        </Box>
      </Box>

      <Box className={classes.row} sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <label>Course</label>
          <Select
            placeholder="Select"
            sx={{
              height: "40px",
            }}
            defaultValue="Select"
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box>
        <Typography>Skills you'll learn</Typography>
      </Box>
    </Paper>
  );
}
export default Demo;
