import React, { useState, createContext } from 'react';
import { isPlatform } from '@ionic/react';

export const Context = createContext();

const ContextComponent = props => {
 

  return (
    <Context.Provider
     
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextComponent;
