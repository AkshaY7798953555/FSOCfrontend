// import React from 'react';
// import { Link } from 'react-router-dom';
// import makeStyles from '@mui/styles/makeStyles';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// const DrawerComponent = () => {
//   const classes = useStyles();

//   return (
//     <Drawer
//       className={classes.drawer}
//       variant="permanent"
//       classes={{
//         paper: classes.drawerPaper,
//       }}
//     >
//       <List>
//         <Link to="/user-details">
//           <ListItem button>
//             <ListItemText primary="User Details" />
//           </ListItem>
//         </Link>
//         <Link to="/center-details">
//           <ListItem button>
//             <ListItemText primary="Center Details" />
//           </ListItem>
//         </Link>
//         <Link to="/nearest-centers">
//           <ListItem button>
//             <ListItemText primary="Nearest Centers" />
//           </ListItem>
//         </Link>
//       </List>
//     </Drawer>
//   );
// };

// export default DrawerComponent;
