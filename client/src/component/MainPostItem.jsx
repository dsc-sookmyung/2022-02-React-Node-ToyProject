import React from "react";
import styled from "styled-components";
import './PostItem.scss';

function MainPostItem(props) {
    const { onClick, post } = props;

    return (
        <div className="blog-card" onClick={onClick}>
            <div className="meta">
                <div className="photo" style={{ backgroundImage: `url(${post.image})` }}></div>
                <ul className="details">
                    <li className="date">{post.created_at}</li>
                </ul>
            </div>
            <div className="description">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </div>
    );
}

export default MainPostItem;