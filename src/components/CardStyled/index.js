import React from "react";
import { DivBox, DivText, DivTitle } from "./styles.js";

class CardStyled extends React.Component {
  render() {
    return (
      <DivBox>
        <DivTitle>Titulo</DivTitle>
        <DivText>Esto es un parrafo</DivText>
      </DivBox>
    );
  }
}

export default CardStyled;
