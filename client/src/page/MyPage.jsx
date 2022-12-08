import { React, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyPage(props) {
    //const server = 'http://3.35.184.0:3000'
    const navigate = useNavigate()
    const nickname = sessionStorage.getItem("loginNickname")
    //const id = sessionStorage.getItem("loginid")

    //const [posts, setPosts] = useState([])

    /*useEffect(() => {
        axios.get(`${server}/blog/${id}`)
          .then((response)=>(setPosts(response.data)))
          .catch((error)=>(console.log(error)))
    }, [])*/

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
            {/*<div>
                {posts.map((post) => {
                    return (
                        <tmpPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            image={post.image}
                            content={post.content}
                            created_at={post.created_at} />
                    );
                })}
            </div>*/}
        </div>
    )
}

export default MyPage;