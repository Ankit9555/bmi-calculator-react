import React, { useMemo, useState } from 'react'
import './App.css'
function App() {

  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(60);

  function onheightchange(event){
     setHeight(event.target.value)
  }
  function onweightchange(event){
    setWeight(event.target.value)
  }

  const output = useMemo(()=>{
      const calculatedheight = height/100;
      return (weight/(calculatedheight*calculatedheight)).toFixed(1)
  },[weight, height]);

  let scorecard = '';
  if(output <= 18.5)
    {
      scorecard = 'Underweight';
    }
    else if(output > 18.5 && output <= 24.9)
      {
        scorecard = 'Healthy';
      }
      else if(output > 25 && output <= 29.9)
        {
          scorecard = 'Overweight';
        }
        else if(output > 30 && output <= 34.9)
          {
            scorecard = 'Obese';
          }
          else if(output > 35 && output <= 39.9)
            {
              scorecard = 'Severly Obese';
            }
            else
              {
                scorecard = 'Morbidly obese';
              }

  return (
    <main>
      <h1>BMI CAlCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight:{weight} kg</p>
        <input className='input-slider'
          type='range'
          step="1"
          min="40"
          max="200"
          onChange={onweightchange}
          />

        <p className='slider-output'>Height:{height} cm</p>
        <input className='input-slider'
          type='range'
          step="1"
          min="140"
          max="220"
          onChange={onheightchange}
           />
      </div>

      <div className='output-section'>
        <p className='heading'>YOUR BMI SCORE : <div className='score'>{scorecard}</div></p>
        <div className='output'>{output}</div>
      </div>
      <div className='rating'>
        <span className='underweight'> less 18.5<p>underweight</p></span>
        <span className='healthy'>18.5-24.9<p>healthy</p></span>
        <span className='overweight'>25-29.9<p>overweight</p></span>
        <span className='obese'>30-34.9<p>obese</p></span>
        <span className='severelyobese'>35-39.9<p>sev.  obese</p></span>
        <span className='morbidlyobese'> >= 40<p>mor.  obese</p></span>
      </div>

    </main>
  )
}

export default App
