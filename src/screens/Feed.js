import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/react';

import { useState, useEffect } from 'react';
import { Padding } from '../components/StyledComponents';

const Feed = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="scroll" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feedy</IonTitle>
          </IonToolbar>

          <IonSearchbar
            animated
            showCancelButton="focus"
            onIonChange={() => console.log('object')}
          />
        </IonHeader>
        <Padding>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
          <p>HOLA</p>
        </Padding>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
