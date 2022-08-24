import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import classes from './styles.module.scss';
// import DrawerActionButton from './DrawerActionButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  drawerActions?: React.ReactNode;
  classes?: string;
  backgroundColor?: string;
}

const RightDrawer: React.FC<Props> = (props) => {
  // - Config dynamic width
  const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: props.width && props.width,
            background: props.backgroundColor ? props.backgroundColor : 'white',
          },
        },
      },
    },
  });
  return (
    <div className={classes.rightDrawer}>
      <ThemeProvider theme={theme}>
        <Drawer
          anchor='right'
          open={props.isOpen}
          onClose={props.onClose}
          classes={{
            modal: classes.rightDrawer,
            root: classes.root,
            paper: `${classes.paper} ${props.classes}`,
          }}
        >
          <div className={classes.drawerHeader}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={classes['close-icon']}
              onClick={props.onClose}
            />
          </div>
          {props.children}
        </Drawer>
      </ThemeProvider>
    </div>
  );
};

export default RightDrawer;
