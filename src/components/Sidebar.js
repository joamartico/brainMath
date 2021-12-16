import { IonButton, IonInput, IonTextarea, useIonRouter } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { Padding } from './StyledComponents';

const Sidebar = ({ display, tabs }) => {
  const router = useIonRouter();

  if (display) {
    return (
      <Wrapper>
        <Padding>
          <h1>App Title</h1>

          {tabs.map((tab, index) => (
            <IonButton key={index} onClick={() => router.push(tab.url, 'none', 'replace')}>
              {tab.label}
            </IonButton>
          ))}
        </Padding>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Sidebar;

const Wrapper = styled.div`
  /* background: #e4e4e4; */
  background: none !important;
  /* backdrop-filter: blur(35px); */
  width: 300px;
  height: 100%;
  top: 0;
  z-index: 9999999;
  border-right: solid 1px #eaeaea;
`;
