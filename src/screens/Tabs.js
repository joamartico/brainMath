import React, { useContext } from 'react';
import styled from 'styled-components';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  isPlatform,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Tabs = ({ tabs }) => {
  return (
    <IonPage>
      <Row>
        <Sidebar tabs={tabs} display={!isPlatform('mobile') && true} />

        <IonContent>
          <IonTabs className="ion-tabs">
            <IonRouterOutlet>
              {tabs.map((tab, index) => {
                return <Route path={tab.url} component={tab.component} key={index} />;
              })}
              {/* <Route exact path="/tabs" render={() => <Redirect to="/tabs/feed" />} /> */}
            </IonRouterOutlet>

            <IonTabBar
              slot="bottom"
              style={{
                display: !isPlatform('mobile') && 'none',
              }}
            >
              {tabs.map((tab, index) => {
                return (
                  <IonTabButton tab={tab.label} href={tab.url} key={index}>
                    <IonIcon icon={tab.icon} />
                    <IonLabel>{tab.label}</IonLabel>
                  </IonTabButton>
                );
              })}
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </Row>
    </IonPage>
  );
};

export default Tabs;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
