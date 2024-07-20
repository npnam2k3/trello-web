import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};
function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%", // ăn theo width container
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Dev backend Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/ Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>
        <AvatarGroup
          sx={{
            "̃& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
          max={7}
        >
          <Tooltip title="DevBackend">
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background_609648-1226.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/chinese-handsome-man-smiling-laughing-isolated-white-wall_231208-1572.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40467.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/premium-photo/man-with-cellphone_1098-11102.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/premium-photo/asian-woman-is-crossing-her-arms_296537-2661.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_1258-59171.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background_609648-1226.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/chinese-handsome-man-smiling-laughing-isolated-white-wall_231208-1572.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
          <Tooltip>
            <Avatar
              alt="DevBackend"
              src="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-gesticulating_273609-40467.jpg?size=626&ext=jpg&ga=GA1.1.490496131.1721445699&semt=sph"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
