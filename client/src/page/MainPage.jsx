import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FloatingButton from "../component/FloatingButton";
import MainPostList from "../component/MainPostList";

const Container = styled.div`
box-sizing: border-box;
margin: 2rem;
`

function MainPage(props) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const userId = sessionStorage.getItem("loginId");

    const getPosts = async () => {
        const result = await axios.get('http://3.35.184.0:3000/blog/');
        setPosts(result.data.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Container>
            <MainPostList
                posts={posts}
                onClickItem={(item) => {
                    navigate(`/blog/${item._id}/detail`);
                }}
            ></MainPostList>
            {userId != null && <FloatingButton></FloatingButton>}
        </Container >
    )
}

export default MainPage;