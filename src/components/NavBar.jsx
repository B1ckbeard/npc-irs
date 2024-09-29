import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const NavBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 150,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 150,
          boxSizing: 'border-box',
          backgroundColor: 'grey.800',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ justifyContent: 'center' }}>
            <ListItemText primary="Dashboard" sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/citizens" sx={{ justifyContent: 'center' }}>
            <ListItemText primary="Граждане" sx={{ textAlign: 'center' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;
