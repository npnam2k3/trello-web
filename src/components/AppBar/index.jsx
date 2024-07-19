import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%", // ăn theo width container
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
