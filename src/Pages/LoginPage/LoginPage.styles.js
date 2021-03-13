import styled from 'styled-components';

export const EyeIcon = styled.i`
  padding: 10px;
  min-width: 40px;
`;

export const LoginCard = styled.div`
  background-color: #fff;
  border: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 40px 0 0;
  width: 500px;
  align-self: center;
`;

export const LoginHolder = styled.div`
  direction: ltr;
  line-height: 1.34;
  position: relative;
  text-align: center;
  display: inline-block;
  margin: auto;
  padding: 6px 18px;
  font-size: 17px;
  font-family: inherit;
  width: 100%;

  i {
    position: absolute;
    right: 15px;
    top: calc(30% - 0.5em);
  }
`;

export const InputLogin = styled.input`
  direction: ltr;
  margin: 0;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? 'red' : 'black')};
  color: #000;
  height: 45px;
  line-height: 22px;
  vertical-align: middle;
  font-size: 17px;
  padding: 14px 16px;
  width: 100%;
  border-radius: 6px;
  font-family: inherit;
`;
