import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonSearchbar,
  IonList,
} from '@ionic/react';

import { useState, useEffect } from 'react';
import { db } from '../../firebase';

const Feed = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection('users').onSnapshot(snapshot => {
      const newUsers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(newUsers);
    });
  }, []);
  
  console.log(users);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feedy</IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default Feed;
