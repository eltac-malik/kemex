import * as React from 'react';
import { useSnapshot } from 'valtio'

import Drawer from '@mui/material/Drawer';

import {Navbar} from '#/Navbar'
import {state} from 'state'
import {widthByPercent} from 'shared/common'
import {useScreen} from 'shared/hooks'


export const Layout = ({children}) => {
  const snap = useSnapshot(state)

  const isMobile = useScreen()

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    state.drawer = !state.drawer
  };
  
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Navbar/>
          <Drawer
            anchor={anchor}
            open={snap.drawer}
            onClose={toggleDrawer()}
          >
            <div style={{width:widthByPercent(isMobile ? 70 : 100)}}>

            </div>
          </Drawer>
        </React.Fragment>
      ))}

      <div>
        {children}
      </div>
    </div>
  );
}