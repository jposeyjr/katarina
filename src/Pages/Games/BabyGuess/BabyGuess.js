import React, { useState } from 'react';
import {
  BabyGuessInput,
  BabyGuessRoot,
  GuessSubmit,
  Form,
  InputHolder,
} from './styles';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

const BabyGuess = () => {
  const initGuess = {
    hair: '',
    eyes: '',
    weight: 0,
    date: new Date(),
    time: '',
  };
  const [newGuess, setGuess] = useState(initGuess);

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

  return (
    <BabyGuessRoot>
      <h1>Baby Guess</h1>
      <Form>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Hair color'
            aria-placeholder='hair color'
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
            value={newGuess.eye || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, eye: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Baby Weight'
            aria-placeholder='baby weight'
            value={newGuess.weight || ''}
            required
            onChange={(e) => setGuess({ ...newGuess, weight: e.target.value })}
          />
        </InputHolder>
        <InputHolder>
          <BabyGuessInput
            type='text'
            placeholder='Time Born'
            aria-placeholder='time born'
            value={newGuess.time || '8:00am'}
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
