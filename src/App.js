import { IonApp, IonRouterOutlet } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Context from './Context';
import Tabs from "./pages/Tabs";




const App = () => {
  return (
    <Context>
      <IonApp>
        <IonReactRouter>
            <IonRouterOutlet id="main">
                <Route path="/tabs" render={() => <Tabs />} />
                <Route exact path="/" render={() => <Redirect to="/tabs" />} />
            </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Context>
  );
};

export default App;