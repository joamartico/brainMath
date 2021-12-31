import { IonApp, IonRouterOutlet } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { bookmark, home, person, search } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Context from './Context';
import Main from "./screens/Main";

const App = () => {
  return (
    <Context>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route render={() => <Main/> } />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Context>
  );
};

export default App;
