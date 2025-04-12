import { Box, Avatar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 4,
        px: 2,
      }}
    >
      <Avatar
        sx={{
          width: 56,
          height: 56,
          bgcolor: "#BB86FC",
        }}
      >
        AI
      </Avatar>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        AI Chat Assistant
      </Typography>

      <span className="text-lg">มันช้าๆหน่อยแบบตอบมึนๆ</span>
    </Box>
  );
};

export default Header;
