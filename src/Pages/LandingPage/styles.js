import styled from 'styled-components';

export const AboutText = styled.p`
  margin-top: 0;
  text-align: center;
  align-self: center;
  font-size: 20px;
`;

export const LandingRoot = styled.div`
  min-width: 500px;
  margin: 2em;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media only screen and (max-width: 900px) {
    min-width: unset;
    margin: 0;
    margin-top: 70px;
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
  width: 150px;
  font-family: inherit;

  @media only screen and (max-width: 900px) {
    width: 90%;
    align-self: center;
  }
`;
