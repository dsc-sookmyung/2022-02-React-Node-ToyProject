import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Button from "../ui/Button";
import DetailPostItem from "../component/DetailPostItem";

function PostDetailPage(props) {

    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [isLoginUser, setIsLoginUser] = useState(false);

    const { blogId } = useParams();
    const userId = sessionStorage.getItem("loginId");

    useEffect(() => {
        axios.get(`http://3.35.184.0:3000/blog/${blogId}/detail`)
            .then((response) => {
                setPost(response.data.data);
                if(userId === response.data.data.user_id)
                    setIsLoginUser(true);
            })
            .catch((error) => (console.log(error)))
    }, [blogId]);

    const deletePosts = async () => {
        await axios.delete(`http://3.35.184.0:3000/blog/${blogId}`)
            .then((response) => {
                console.log(response);
                if (response.status === 200)
                    alert("삭제되었습니다.");
            });
    };

    const editPosts = () => {
        navigate(`/blog/${blogId}/edit`);
    }

    return (
        <div style={{ padding: "5%" }}>
            <DetailPostItem post={post} editOnClick={editPosts} deleteOnClick={deletePosts} isLoginUser = {isLoginUser}/>
        </div>
    )
}

export default PostDetailPage;