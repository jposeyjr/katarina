import React, { useState } from 'react';
import {
  BabyGuessInput,
  BabyGuessRoot,
  GuessSubmit,
  Form,
  InputHolder,
  AboutText,
} from './styles';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { useDispatch } from 'react-redux';

const BabyGuess = () => {
  /**
   * INIT state for guesses baby info,
   */
  const initGuess = {
    hair: '',
    eyes: '',
    lbs: 0,
    oz: 0,
    day: new Date(),
    time: '',
  };
  const [newGuess, setGuess] = useState(initGuess);
  const dispatch = useDispatch();

  /**
   * JS Dates are ugly and weird using date-fns to fix it and display it in a normal way
   * These functions help make that possible.
   */

  function formateDate(date, format, local) {
    return dateFnsFormat(date, format, { local });
  }

  function parseDate(str, format, local) {
    const parsed = dateFnsParse(str, format, new Date(), { local });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }

  /**
   * Used to set due date
   * @todo pull from user once they fill in the information on the baby form.
   */

  const modifiers = {
    highlighted: new Date(2021, 4, 7),
  };

  //easiest way to change styles of date picker due to how they handle styles.
  const dueDateStyle = `
  .DayPickerInput input { 
    direction: ltr;
    margin: 0;
    background: #fff;
    border: 1px solid #dddfe2;
    color: #000;
    height: 40px;
    line-height: 14px;
    vertical-align: middle;
    font-size: 17px;
    padding: 14px 16px;
    width: 350px;
    border-radius: 6px;
    font-family: inherit;
  }
  
  .DayPicker-Day--highlighted {
     background-color: orange;
     color: white;
 }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGuess.hair && newGuess.eyes && newGuess.lbs && newGuess.oz) {
      dispatch({ type: 'ADD_GUESS', payload: newGuess });
      setGuess(initGuess);
    }
  };

  return (
    <BabyGuessRoot>
      <h1>Baby Guess</h1>
      <AboutText>
        In the boxes below make enter your guesses for what you think the baby
        will look like along with the time and day the baby will be born! The
        person with the closest day/time AND guesses will win! Tip with our eye
        and hair combo we can have almost any combo of hair and eye color.
      </AboutText>
      <Form onSubmit={handleSubmit}>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Hair color'
            aria-placeholder='hair color'
            size={'350px'}
            value={newGuess.hair || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, hair: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Eye color'
            aria-placeholder='eye color'
            size={'350px'}
            value={newGuess.eyes || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, eyes: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <label>Weight </label>
          <BabyGuessInput
            type='text'
            placeholder='lbs'
            aria-placeholder='lbs'
            size={'145px'}
            value={newGuess.lbs || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, lbs: e.target.value })}
          />{' '}
          <BabyGuessInput
            type='text'
            placeholder='oz'
            aria-placeholder='oz'
            size={'145px'}
            value={newGuess.oz || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, oz: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Time Born i.e 8:00am'
            aria-placeholder='time born'
            size={'350px'}
            value={newGuess.time || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, time: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <style>{dueDateStyle}</style>
          <DayPickerInput
            formatDate={formateDate}
            format={'MM/dd/yyyy'}
            parseDate={parseDate}
            placeholder='Due date, expected date highlighted!'
            dayPickerProps={{
              month: new Date(2021, 4),
              modifiers: modifiers,
            }}
            onDayChange={(date) => setGuess({ ...newGuess, day: date })}
          />
        </InputHolder>
        <GuessSubmit>Submit</GuessSubmit>
      </Form>
    </BabyGuessRoot>
  );
};

export default BabyGuess;
