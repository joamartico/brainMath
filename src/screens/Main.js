import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonInput,
  IonTextarea,
  IonButtons,
  IonButton,
  IonToggle,
} from '@ionic/react';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/theme';
import { Icon, Img, Padding, Row, Scroll } from '../components/StyledComponents';
import { checkmarkSharp, volumeLow } from 'ionicons/icons';
import ToggleEyeSound from '../components/ToggleEyeSound';
import { useGlobalState } from '../Context';
import ListenButton from '../components/ListenButton';
import LangSelector from '../components/LangSelector';

const operators = ['+', '-', '*', '/'];

const Main = () => {
  const [operation, setOperation] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [answerState, setAnswerState] = useState();
  const { listen } = useGlobalState();

  function getRandom(min, max) {
    const rand = min + Math.round(Math.random() * (max - min));
    return rand;
  }

  function getFirstNumber(operator, secondNumber) {
    if (operator == '/' || operator == '*') return secondNumber * getRandom(10, 20);
    if (operator == '-') return getRandom(secondNumber, 1000);

    return getRandom(10, 1000);
  }

  async function getNewCalc() {
    const operator = operators[getRandom(0, 3)];
    const secondNumber =
      operator == '*' || operator == '/' ? getRandom(2, 10) : getRandom(10, 1000);
    const firstNumber = getFirstNumber(operator, secondNumber);
    const _operation = await `${firstNumber} ${operator} ${secondNumber}`;
    setOperation(_operation);
    console.log('op ', eval(_operation));
  }

  async function onCheck(e) {
    e?.preventDefault();
    if (eval(operation) == answerInput) {
      getNewCalc();
      setAnswerState('correct');
      setTimeout(() => {
        setAnswerState();
        setAnswerInput('');
      }, 500);
    } else {
      setAnswerState('incorrect');
      setTimeout(() => {
        setAnswerState();
      }, 500);
    }
  }

  useEffect(() => {
    getNewCalc();
  }, []);

  return (
    <IonPage>
      <IonContent className="scroll" fullscreen>
        <Toolbar>
          <IonButtons slot="start">
            <ToggleEyeSound />
          </IonButtons>
          <Section slot="end">
            <LangSelector />
          </Section>
        </Toolbar>
        <Text>{listen ? <ListenButton operation={operation} /> : operation}</Text>

        <AnswerRow onSubmit={onCheck} answerState={answerState}>
          <AnswerInput
            autofocus
            onIonChange={e => setAnswerInput(e.detail.value)}
            answerState={answerState}
            value={answerInput}
            // type="number"
            inputmode="numeric"
          />
          <AnswerButton onClick={onCheck} answerState={answerState}>
            {/* Check */}
            {(!answerState || answerState == 'incorrect') && 'Check'}
            {/* {!answerState  && "Check"} */}
            {answerState == 'correct' && <Icon icon={checkmarkSharp} size={28} />}
            {/* {answerState == 'incorrect' && <Icon icon={closeSharp} size={28} />} */}
          </AnswerButton>
        </AnswerRow>
      </IonContent>
    </IonPage>
  );
};

export default Main;

const Section = styled(IonButtons)`
  margin-left: auto;
`;

const Toolbar = styled.div`
  display: flex !important;
  align-items: center !important;
  height: 42px !important;
  top: 0 !important;
  width: 90% !important;
  margin: auto;
  height: 70px !important;
`;

const Text = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: 650;
  margin: auto;
  width: fit-content;
  margin-top: 200px;
  /* font-family: 'Montserrat', "Helvetica Neue", Helvetica, */
`;

const AnswerRow = styled.form`
  display: flex;
  margin: auto;
  width: 200px;
  margin-top: 50px;
  background: red;
  border: 2.3px solid
    ${({ answerState }) =>
      answerState == 'incorrect' ? COLORS.lightRed : 'var(--background-color)'} !important;
  background: ${({ answerState }) => {
    if (answerState == 'correct') return '#2f2';
    return '#fff';
  }} !important;
  border-radius: 14px;
  height: 46px;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

const AnswerInput = styled(IonInput)`
  border-radius: 14px;
  height: 46px;
  /* padding: 10px; */
  --padding-end: 0px;
  background: none;
  text-align: center;
  font-weight: 500;
`;

const AnswerButton = styled.div`
  cursor: pointer;
  border-radius: 0 14px 14px 0;
  border-radius: 14px;
  height: 38px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d0;
  background: ${({ answerState }) => {
    if (answerState == 'incorrect') return COLORS.lightRed;
    return COLORS.primaryGreen;
  }} !important;
  color: ${({ answerState }) => {
    if (answerState == 'incorrect') return COLORS.darkRed;
    return COLORS.secondaryGreen;
  }} !important;
  padding: 0 10px;
  font-weight: 500;
  border-bottom: 4px solid
    ${({ answerState }) => (answerState == 'incorrect' ? COLORS.darkRed : '#182')};
  margin-left: auto;
  z-index: 9999;
  margin-right: 3px;
  &:active {
    border-bottom: none;
    /* margin-top: 7px; */
  }
  transition: all 0.2s ease-out;
`;
