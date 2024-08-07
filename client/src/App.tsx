import { Link, Outlet } from 'react-router-dom';

import { Box, Container, Card, List, Link as ExLink, Divider, ListItem, ListItemIcon, ListItemText, Typography, SvgIcon } from '@mui/material';

import {
  FaGithub,
  FaRegEnvelope,
  FaLinkedin,
  FaLocationDot,
  FaDownload,
  FaCode,
} from "react-icons/fa6"
import * as SI from "react-icons/si"

import { ContactIcons } from './Types/IconTypes';
import { useStyles, AnimatedText } from './styles/Styling';
import Nav from './components/Nav'

const contactIcons: ContactIcons[] = [
  {
    socialIcons: FaLinkedin,
    pathName: "https://www.linkedin.com/in/david-opoku-7008721b7/",
  },
  {
    socialIcons: FaGithub,
    pathName: "https://github.com/dopoku12",
  },
  {
    icons: FaDownload,
    label: 'CV',
    text: 'Download'
  },
  {
    icons: FaLocationDot,
    label: 'LOCATION',
    text: 'Washington DC-Baltimore Area'
  },
  {
    icons: FaRegEnvelope,
    label: 'EMAIL',
    text: 'dopoku.tech@gmail.com',
    pathName: "mailto:dopoku.tech@gmail.com",
  },
]

const socialLinks = contactIcons.filter(i => i.socialIcons).map(
  (i, index) => (
    <ListItemIcon key={index}  >
      <ExLink href={i.pathName} target='_blank' >
        <i.socialIcons />
      </ExLink>
    </ListItemIcon>
  ));

const informational = contactIcons.filter(i => i.icons).map((i, index) => (
  <ListItem key={index} sx={{ ...useStyles.layout, justifyContent: "space-evenly", alignItems: "baseline" }} >
    <ListItemText primary={i.label} />
    {
      i.pathName ?
        <ListItemIcon >
          <ExLink href={i.pathName} sx={{ ...useStyles.layout, flexDirection: 'row' }}>
            <ListItemText secondary={i.text} sx={{ marginRight: 2 }} />
            <i.icons />
          </ExLink>
        </ListItemIcon>
        : <ListItemIcon sx={{ ...useStyles.layout, flexDirection: 'row' }}>

          <ListItemText secondary={i.text} sx={{ marginRight: 1 }} />
          <i.icons />
        </ListItemIcon>
    }
  </ListItem>
));

function App() {

  return (
    <Container sx={useStyles.layout}>
      <Card >
        <Box sx={useStyles.layout} component='header'>

          <Typography variant='h5' gutterBottom>
            David Opoku
          </Typography>

          <Typography>
            <AnimatedText /> Solutions
          </Typography>

          {/* 
          <Typography variant='h7' className=" typewriter">
            👋🏿 Hi I'm David, I turn dreams and visions into code.
          </Typography> */}

          <List>
            {
              socialLinks
            }
          </List>
        </Box>

        <Divider component='li' />
        <List sx={{ ...useStyles.layout, justifyContent: "space-evenly" }}>
          {
            informational
          }
        </List>
      </Card>

      <Card>
        <Nav />
        <Divider />
        <Outlet context={SI} />
      </Card>
    </Container >
  )
}

export default App
