import React, { useState, createContext, useContext } from 'react';
import { isPlatform } from '@ionic/react';

const Context = createContext();

const ContextComponent = props => {
const [listen, setListen] = useState(false)
const [lang, setLang] = useState("es-MX")
 

  return (
    <Context.Provider
    value={{
      ...props.value,
      listen,
      setListen,
      lang,
      setLang
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
