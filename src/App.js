import { IonApp, IonRouterOutlet } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { bookmark, home, person, search } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Context from './Context';
import Feed from './screens/Feed';
import Tabs from './screens/Tabs';

const App = () => {
  return (
    <Context>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">

            <Route
              path="/tabs"
              render={() => (
                <Tabs
                  tabs={[
                    {
                      url: '/tabs/',
                      label: 'Feed',
                      component: Feed,
                      icon: home,
                    },
                    {
                      url: '/tabs/search',
                      label: 'Search',
                      component: Feed,
                      icon: search,
                    },
                    {
                      url: '/tabs/favs',
                      label: 'Favs',
                      component: Feed,
                      icon: bookmark,
                    },
                    {
                      url: '/tabs/user',
                      label: 'User',
                      component: Feed,
                      icon: person,
                    },
                  ]}
                />
              )}
            />
            <Route exact path="/" render={() => <Redirect to="/tabs/feed" />} />
            <Route render={() => <Redirect to="/tabs/feed" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Context>
  );
};

export default App;
