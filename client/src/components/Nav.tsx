import { Box, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import { FaCircleUser, FaCode, FaFileLines, FaRegEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IconnName } from "../Types/IconTypes";
import { useState } from "react";

const navIcons: IconnName[] = [
  { name: 'About', icon: FaCircleUser, path: '/About' },
  { name: 'Portfolio', icon: FaCode, path: '/Portfolio' },
  { name: 'Resume', icon: FaFileLines, path: '/Resume' },
  { name: 'Contact', icon: FaRegEnvelope, path: '/Contact' }
];

const Nav: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Box component='nav'>
        <Typography>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navIcons.map((i, index) => (
            <BottomNavigationAction
            key={index}
            label={i.name}
            icon={<i.icon size={30}/>}
            component={Link}
            to={i.path}
            />
        ))}
      </BottomNavigation>
        </Typography>
    </Box>
  );
};

export default Nav;
