import { React, createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
position: fixed;
bottom:40px;
right:10%;
display: flex;
margin: 0 auto;
width: 1000px;
justify-content: flex-end;
`
const Float = styled.a`
    color: palevioletred;
    padding: 0;
    width: 55.5px;
    height: 55.5px;
    display: inline-block;
    outline: 0;
    border: none;
    text-decoration: none;
    background:#ffefd6;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    &:hover{
        background: #ffefc5;
    }
`;

const Float_div = styled.div`
font-size: 1.8em;
padding: 0;
margin: .22em 0 0 0;
`;

function FloatingButton() {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Float onClick={() => {
                navigate("/blog");
            }}><Float_div>+</Float_div></Float>
        </Wrapper>
    )
}

export default FloatingButton;