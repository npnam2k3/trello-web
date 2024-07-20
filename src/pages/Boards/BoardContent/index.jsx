import Box from "@mui/material/Box";

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%", // ăn theo width container
        height: (theme) =>
          `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
