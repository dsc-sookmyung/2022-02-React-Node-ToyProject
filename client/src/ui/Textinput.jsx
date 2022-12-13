import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin-top: 30px;
    padding: 1rem;
    border: none;
    resize: none;
    overflow: hidden;
    :focus {
        outline: none;
    }
`;

function TextInput(props){
    const {height, value, onChange, placeholder} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} placeholder={placeholder}/>;
}

export default TextInput;