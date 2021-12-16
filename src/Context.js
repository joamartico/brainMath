import React, { useState, createContext, useContext } from 'react';
import { isPlatform } from '@ionic/react';

const Context = createContext();

const ContextComponent = props => {
  const [state, setState] = useState()
 

  return (
    <Context.Provider
    value={{
      ...props.value,
      state,
      setState,
    }}
    >
      {props.children}
    </Context.Provider>
  );
};

export function useGlobalState(){
  const globalState = useContext(Context);
  return globalState;
}
export default ContextComponent;
