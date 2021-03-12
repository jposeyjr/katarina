import styled from 'styled-components';

export const AboutText = styled.p`
  margin-top: 0;
  text-align: center;
`;

export const PriceRightRoot = styled.div`
  min-width: 500px;
  margin: 2em;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const PriceRightInput = styled.input`
  direction: ltr;
  margin: 0;
  background: #fff;
  border: 1px solid #dddfe2;
  color: #000;
  height: 14px;
  line-height: 14px;
  vertical-align: middle;
  font-size: 17px;
  padding: 14px 16px;
  width: 250px;
  border-radius: 6px;
  font-family: inherit;
`;

export const InputHolder = styled.div`
  direction: ltr;
  line-height: 1.34;
  text-align: center;
  display: inline-block;
  margin: auto;
  padding: 6px 0;
  font-size: 17px;
  font-family: inherit;
`;

export const Form = styled.form`
  max-width: 1500px;
  align-self: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  max-width: 1250px;
`;

export const Column = styled.div`
  flex: ${(props) => props.size};
  max-width: ${(props) => props.size};
  padding: 0 4px;

  input {
    margin-top: 1em;
  }

  button {
    margin-top: 8px;
  }

  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  direction: ltr;
  margin: 0;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  position: relative;
  text-align: center;
  text-shadow: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  background-color: #ff883e;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: 250px;
  font-family: inherit;
`;
