import React from 'react'
import SimonSpeech from '../SimonsSpeech/SimonsSpeech';
import classes from './Simon.module.css'


type SimonPropsType = {
  simonSaid: string
  isSimon: boolean
  isCorrect: boolean | undefined
  result: string
}
const Simon: React.FC<SimonPropsType> = ({ simonSaid, isSimon, isCorrect, result }) => {

  const simonsAnswer = () => {
    if (isCorrect === false) {
      let fail = ` Чувак, я не говорил вот эту ахинею: ${result}. Неверно!`;
      return <SimonSpeech simonSaid={fail} /> 
    }
    if (isCorrect === true) {
      let success = `Ты сделал что я сказал: ${result}. Молодец!`
      return <SimonSpeech simonSaid={success} />; 
    }
  }
  let simonsCheck = isSimon ? <SimonSpeech simonSaid={simonSaid} /> : null
  return (
    <div className={classes.Simon}>
      {simonsCheck}
      {simonsAnswer()}
    </div>
  );
}
export default Simon