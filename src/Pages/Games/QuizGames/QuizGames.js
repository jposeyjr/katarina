import React from 'react';
import {
  AboutText,
  Form,
  QuizGameInput,
  QuizGuessRoot,
  QuizSubmit,
} from './style';

const QuizGames = () => {
  return (
    <QuizGuessRoot>
      <AboutText>
        Below you will find options to create your own question based games. You
        can other make a selection based answer, multiple choice or texted based
        answering system. These can be combined together to make custom question
        games for your shower!
      </AboutText>
      <h3>Quiz Name</h3>
      <Form>
        <QuizGameInput></QuizGameInput>
        <QuizSubmit>Submit</QuizSubmit>
      </Form>
    </QuizGuessRoot>
  );
};

export default QuizGames;
