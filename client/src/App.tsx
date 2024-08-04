import { Link, Outlet } from 'react-router-dom';

import { Container, Card, List, ListItemButton, Link as ExLink, Divider, ListItem, Grid } from '@mui/material';

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
    text: 'Download',
    pathName: "mailto:dopoku.tech@gmail.com",
  },

]

function App() {

  return (
    <Container>
      <Card sx={{ display: 'grid', gridRow: "auto", alignItems: 'center' }}>
        <FaCode />
        <List sx={
          { display: 'grid', gridColumn: "auto", alignItems: "center" }
        }>
          {
            contactIcons.filter(i => i.socialIcons).map((i, index) =>
            (
              <Grid item gridTemplateColumns={3}>
                <ListItemButton key={index}>
                  <ExLink href={i.pathName} target='_blank'>
                    <i.socialIcons />
                  </ExLink>
                </ListItemButton>
              </Grid>
            ))
          }

          <Divider component='li' />
          {
            contactIcons.filter(i => i.icons).map((i, index) => (
              <ListItem>
                <i.icons />
              </ListItem>
            ))
          }
        </List>
      </Card>

      <Outlet context={SI} />
    </Container >
  )
}

export default App
