import React from "react";

import { ButtonContainer } from './styles'

export const Button = ({ onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            Pesquisar
        </ButtonContainer>

    );

}

export default Button;