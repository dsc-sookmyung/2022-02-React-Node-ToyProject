import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Button from "../ui/Button";
import Textinput from "../ui/Textinput";
import DetailPostItem from "../component/DetailPostItem";
import "../component/DetailPostItem.scss";

function EditPostPage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImage] = useState(null);
    const [created, setCreated] = useState("");
    const userId = sessionStorage.getItem("loginId");

    const { blogId } = useParams();


    useEffect(() => {
        axios.get(`http://3.35.184.0:3000/blog/${blogId}/detail`)
        .then((response)=>{
            setTitle(response.data.data.title)
            setContent(response.data.data.content)
            setImage(response.data.data.image)
            setCreated(response.data.data.created_at)
        })
        .catch((error)=>(console.log(error)))
    }, [])

    const onLoadFile = (e) => {
        e.preventDefault()
        const image = e.target.files;

        setImage(image);
    }

    const editPost = async() => {
        let formData = new FormData();
        formData.append("image", images[0]);
        formData.append("title", title);
        formData.append("content", content);

        await axios.put(`http://3.35.184.0:3000/blog/${blogId}`, formData)
        .then((response) => {
            console.log("success");
            console.log(response.data);

            if(response.status === 200){
                alert("수정이 완료되었습니다");
                navigate("/");
            }

            else if(response.status === 500 || response.status === 400){
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
            flexDirection: "column",
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
                        editPost();
                        navigate("/blog");
                    }}><span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">POST</span></button>
            </div>
        </div>

    )
}

export default EditPostPage;