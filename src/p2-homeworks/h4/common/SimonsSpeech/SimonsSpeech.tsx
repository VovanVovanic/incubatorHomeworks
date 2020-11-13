import React from 'react'
import classes from './Speech.module.css'

type SimonSaidType = {
  simonSaid: string
}
const SimonSpeech: React.FC<SimonSaidType> = ({simonSaid }) => {
  return (
    <div className={classes.SpeechWrapper}>
      <div className={classes.Speech}>{ simonSaid}</div>
    </div>
  );
}
export default SimonSpeech