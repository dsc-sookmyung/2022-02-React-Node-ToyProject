import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import Textinput from "../ui/Textinput";
import axios from "axios";
import "../component/DetailPostItem.scss";

// const Wrapper = styled.div`
//     padding: 16px;
//     width: calc(100% - 32px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const Container = styled.div`
//     width: 100%;
//     max-width: 720px;
//     & > * {
//         :not(:last-child) {
//             margin-bottom: 16px;
//         }
//     }
// `;

function PostPage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImage] = useState("");
    const userId = sessionStorage.getItem("loginId");

    const onLoadFile = (e) => {
        e.preventDefault()
        const image = e.target.files;

        setImage(image);
        console.log(images[0]);
    }

    const writePost = async () => {
        let formData = new FormData();
        formData.append("image", images[0]);
        formData.append("userId", userId);
        formData.append("title", title);
        formData.append("content", content);

        await axios.post(`http://3.35.184.0:3000/blog`, formData)
            .then((response) => {
                console.log("success");
                console.log(response.data);

                if (response.status === 200) {
                    alert("등록이 완료되었습니다");
                    navigate("/");
                }

                else if (response.status === 500 || response.status === 400) {
                    console.log("server error");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div style={{
            display: "flex",
            "flex-direction": "column",
            margin: "0 auto",
            width: "65%",
        }}>

            <Textinput
                height={40}
                value={title}
                placeholder="TITLE"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />

            <Textinput
                height={700}
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            />

            <div className="input-wrapper">
                <span className="input-wrapper label">Upload Image</span>
                <input type="file" id="image" className="upload-box" placeholder="Upload Image" accept="img/*" onChange={onLoadFile} />
            </div>

            <div className="button-wrap" style={{width:"calc(100%-32px)"}}>
                <button
                    className="button learn-more"
                    title="POST"
                    onClick={() => {
                        writePost();
                        navigate("/blog");
                    }}><span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">POST</span></button>
            </div>
        </div>
    )
}

export default PostPage;