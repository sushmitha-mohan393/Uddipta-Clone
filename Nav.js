import * as React from 'react';
import {NavigationContainer, NavigationIndependentTree} from '@react-navigation/native';
import DrawNav from './Drawnav';
 
const Nav = () => {
  return (
 <NavigationIndependentTree>
      <DrawNav/>
   </NavigationIndependentTree>
    
  );
};
 
export default Nav;