import styled from "styled-components";
import copy from "../images/icon-copy.svg";
import next from "../images/icon-arrow-right.svg";
import data from "../data.json";
import { useState } from "react";
export default function Card() {
  const [propss, setPropss] = useState(data);
  const [result, setResult] = useState<string>("");
  return (
    <CardStyled>
      <h1>Password Generator</h1>
      <ValueDiv>
        <p>{result}</p>
        <img src={copy} />
      </ValueDiv>
      <Property>
        <div>
          <label htmlFor="range">Character Length</label>
          <p></p>
        </div>
        <input id="range" type="range" />
      </Property>
      <ul>
        {propss.map((Element) => {
          return (
            <List key={Element.id}>
              <input
                type="checkbox"
                onClick={() => {
                  const newData: any = propss.map((elem) => {
                    if (elem.id === Element.id) {
                      return { ...elem, ready: true };
                    }
                    return elem;
                  });
                  setPropss(newData);
                }}
              />
              <h1>{Element.action}</h1>
            </List>
          );
        })}
      </ul>
      <EndDiv>
        <p>STRENGTH</p>
        <div>
          <p>MEDIUM</p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </EndDiv>
      <Button
        onClick={() => {
          const passworde = `https://api.api-ninjas.com/v1/passwordgenerator?length={12}`
          return passworde
        }}
      >
        <span>GENERATE</span> <img src={next} />
      </Button>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: #24232c;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h1 {
    color: #817d92;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    background-color: #18171f;
    padding-bottom: 20px;
  }
  > ul {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;
const ValueDiv = styled.div`
  background-color: transparent;
  border-bottom: 20px solid #18171f;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    cursor: pointer;
  }
  > p {
    color: #e6e5ea;
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
  }
`;

const Property = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    label {
      color: #e6e5ea;
      font-size: 18px;
      line-height: 23px;
      font-weight: 700;
      padding: 15px 0;
    }
    p {
      color: #a4ffaf;
      font-size: 32px;
      font-weight: 700;
      line-height: 42px;
    }
  }
`;

const List = styled.li`
  h1 {
    color: #e6e5ea;
    font-size: 18px;
    font-weight: 300;
    line-height: 23px;
    display: inline-block;
    margin-left: 7px;
  }
`;

const EndDiv = styled.div`
  background-color: #18171f;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  > p {
    color: #817d92;
    font-size: 18px;
  }
  > div {
    display: flex;
    > p {
      color: #e6e5ea;
      font-size: 24px;
      line-height: 32px;
      margin-right: 10px;
    }
    span {
      width: 10px;
      height: 100%;
      height: 28px;
      border: 1px solid white;
      margin: 0px 3px;
    }
  }
`;
const Button = styled.button`
  background-color: #a4ffaf;
  border: none;
  outline: none;
  margin: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
`;
