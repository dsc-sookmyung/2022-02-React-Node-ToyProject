import { React, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainPostList from "../component/MainPostList";

function MyPage(props) {
    const server = 'http://3.35.184.0:3000'
    const navigate = useNavigate()
    const nickname = sessionStorage.getItem("loginNickname")
    const id = sessionStorage.getItem("loginId")

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${server}/blog/${id}`)
          .then((response)=>(setPosts(response.data.data)))
          .catch((error)=>(console.log(error)))
    }, [])

    const handleClick = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            
            e.preventDefault()
            try {
                navigate("/user/:userId")
            } catch (err) {
                console.error(err)
            }
        }, [navigate]
    )

    return (
        <div>
            <div class="edit_box">
                <span class="hi_box">
                    {nickname}님, 안녕하세요! 
                </span>
                <button class="editButton_box" onClick={handleClick}>
                    Edit Profile
                </button>
            </div>
            <div>
                <MainPostList posts={posts} onClickItem={(item) => {
                    navigate(`/blog/${item._id}/detail`);}}></MainPostList>
            </div>
        </div>
    )
}

export default MyPage;