import { volumeLow } from 'ionicons/icons';
import { useGlobalState } from "../Context";
import { Icon } from './StyledComponents';

var voices = [];

var synth = window.speechSynthesis;

const ListenButton = ({ operation }) => {
  const {lang} = useGlobalState();

  function newOperationString() {
    // replace "+" with " plus ", "-" with " minus ", "*" with " times ", "/" with " divided by "
    return operation.replace(/-/g, ' menos ').replace(/\*/g, ' por ').replace(/\//g, ' dividido ');
  }

  async function onListen() {
    operation = await newOperationString(operation);
    voices = await synth.getVoices();

    const voice = await lang == "es-MX" ? voices.find((voice) => voice.name === 'Paulina') : voices.find(voice => voice.lang == lang);

    // const enVoice = voices.find((voice, i) => voice.name === 'Cecil');

    console.log(voices[8]);
    console.log('voices: ', voices);
    var utterThis = new SpeechSynthesisUtterance(operation);
    utterThis.voice = voice;
    synth.speak(utterThis);

    // utterThis.pitch = operation;
    // utterThis.rate = rate.value;
  }
  return <Icon size={90} icon={volumeLow} onClick={onListen} />;
};

export default ListenButton;
