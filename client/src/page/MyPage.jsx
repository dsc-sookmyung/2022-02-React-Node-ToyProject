import { React, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditProfilePage from "./EditProfilePage";

function MyPage(props) {
    // const server = ''
    const navigate = useNavigate()
    const userId = sessionStorage.getItem("loginId")

    const [posts, setPosts] = useState([])

    useEffect(() => {
        /*
        axios.get(`${server}/blog/${userId})
          .then((response)=>(setPosts(response.data)))
          .catch((error)=>(console.log(error)))
        */
    }, [])

    const handleClick = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            
            e.preventDefault()
            try {
                navigate("/user/:userId")
            } catch (err) {
                console.error(err)
            }
        }, //[navigate]
    )

    return (
        /*
        <div>
            <div class="edit_box">
                <span class="hi_box">
                    {userId}님, 안녕하세요!
                </span>
                <button class="editButton_box" onSubmit={handleSubmit}>
                    Edit Profile
                </button>
            </div>
            <div>
                {posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            image={post.image}
                            content={post.content}
                            created_at={post.created_at} />
                    );
                })}
            </div>
        </div>
        */
        <div class="edit_box">
            <span class="hi_box">
                {userId}님, 안녕하세요!
            </span>
            <button class="editButton_box" onClick={handleClick}>
                Edit Profile
            </button>
        </div>
    )
}

export default MyPage;