import { React, createContext, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import MainPostItem from "./MainPostItem";

const Wrapper = styled.div`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 16px;
    margin: 10px;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

function MainPostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <MainPostItem
                        key={post._id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                        />
                );
            })}
        </Wrapper>
    );
} 

export default MainPostList;