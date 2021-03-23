import styled from 'styled-components';

export const AboutText = styled.p`
  margin-top: 0;
  text-align: center;
  width: 40%;
  align-self: center;
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
  height: 46px;
  line-height: 14px;
  vertical-align: middle;
  font-size: 17px;
  padding: 14px 16px;
  width: 250px;
  border-radius: 6px;
  font-family: inherit;
`;

export const GuessInputHolder = styled.div`
  display: flex;
  align-self: center;
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
  width: ${(props) => props.size};
  font-family: inherit;
`;

export const ItemList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 500px) {
    flex-direct: column;
  }
`;

export const ItemCard = styled.div`
  margin: 10px;
  width: 250px;
  height: 250px;
  border-radius: 40px;
  background-size: cover;
  background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  transition: 0.4s;

  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

export const ItemTitle = styled.div`
  text-align: center;
  border-radius: 0px 0px 30px 30px;
  font-size: 22px;
  margin-top: -56px;
  height: 30px;
  color: white;
  text-shadow: black 0px 0px 40px;
`;

export const ImageHolder = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 30px;

  img {
    width: 100%;
    height: 85%;
    border-radius: 30px 30px 0 0;
  }
`;

export const ItemInfo = styled.p`
  display: inline-flex;
  margin-right: 10px;
`;

export const GuessSubmit = styled.button`
  direction: ltr;
  margin-left: 10px;
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
  line-height: 40px;
  width: ${(props) => props.size};
  font-family: inherit;
`;
