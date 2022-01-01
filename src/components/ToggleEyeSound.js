import { IonButtons, IonToggle } from '@ionic/react';
import { eyeSharp, volumeLow } from "ionicons/icons";
import styled from 'styled-components';
import { useGlobalState } from "../Context";
import { Icon } from "./StyledComponents";

const ToggleEyeSound = () => {
    const {setListen} = useGlobalState()
  return (
    <Buttons slot="start">
      <Icon icon={eyeSharp} iconColor="white" />
      <IonToggle color="light" onIonChange={e =>setListen(e.detail.checked)}/>
      <Icon icon={volumeLow} iconColor="white" />
    </Buttons>
  );
};

export default ToggleEyeSound;

const Buttons = styled(IonButtons)`
  width: 110px;
  justify-content: space-between;
`;
