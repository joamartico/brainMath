import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { chevronDown, refreshSharp } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../Context';
import { isMobile } from '../helpers.js/isMobile';
import { Icon, Img } from './StyledComponents';

const languages = ['es-MX', 'en-US', 'pt-PT', 'fr-FR', 'de-DE', 'it-IT'];

const LangSelector = () => {
  const { lang, setLang } = useGlobalState();
  const [showSelector, setShowSelector] = useState(false);


  useEffect(() => {
    const handleClickOutside = () => {
      if (showSelector) {
        setTimeout(() => {
          setShowSelector(false);
        }, 100);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSelector]);

  return (
    <>
      <ActualLang onClick={() => setShowSelector(!showSelector)}>
        <Img size="30px" src={`/${lang}.png`} />
      </ActualLang>

      {showSelector && (
        <Selector>
          {languages.map(language => (
            <Item
              key={language}
              onClick={() => {
                setLang(language);
                setShowSelector(false);
              }}
            >
              <Img size="30px" src={`/${language}.png`} />
            </Item>
          ))}
        </Selector>
      )}
    </>
  );
};
//   return (
//     <IonSelect
//       value={lang}
//       onIonChange={e => setLang(e.detail.value)}
//       interface="popover"
//     >
//          <Img size="40px" src="/es.png"></Img>

//       <IonSelectOption value="es">
//           <Img size="40px" src="/es.png"></Img>
//       </IonSelectOption>
//       <IonSelectOption value="en">en</IonSelectOption>
//       <IonSelectOption value="fr">fr</IonSelectOption>
//       <IonSelectOption value="it">it</IonSelectOption>
//     </IonSelect>
//   );

export default LangSelector;

const LangOption = styled(IonSelectOption)`
  display: flex !important;
  height: fit-content !important;
  width: fit-content !important;
  align-items: center !important;
  justify-content: center !important;
`;

const ActualLang = styled.div`
  border: none;
  border-radius: 14px;
  background: #fff;
  z-index: 99999;
  display: flex;
  align-items: center;
  height: 42px;
  font-weight: 500;
  font-size: 14px;
  padding: 0 10px;
  min-width: fit-content;
  width: 100%;
  font-family: Roboto, sans-serif;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
`;

const Selector = styled.div`
  background: #fff;
  z-index: 999999999999999999999999999999;
  border-radius: 14px;
  position: absolute;
  /* padding-right: 12px; */
  top: ${isMobile && '0'};
  margin-top: ${isMobile ? '50px' : '310px'};
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  padding: 0 10px;
  width: 100%;
  cursor: pointer;
`;
