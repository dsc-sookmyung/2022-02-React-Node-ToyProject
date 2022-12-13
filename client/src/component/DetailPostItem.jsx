import React from "react";
import styled from "styled-components";
import "./DetailPostItem.scss";

function DetailPostItem(props) {
    const { post, editOnClick, deleteOnClick, isLoginUser } = props;

    return (
        <div className="blog-posts-wrap">
            <div className="post-wrap">
                <div className="post-image" style={{
                    backgroundImage: `url(${post.image})`,
                }}>
                </div>
                <div className="post-body">
                    <div className="post-body-primary">
                        <div className="post-meta">{post.created_at}</div>
                        <div className="post-title"><h2>{post.title}</h2></div>
                        <div className="post-text"><p>{post.content}</p></div>
                    </div>
                    <div className="post-body-secondary">
                        {isLoginUser && (
                            <div className="buttons" style={{display: "flex",
                                "flexDirection": "row",
                                "justifyContent": "flex-end",}}>
                                <div className="button-wrap">
                                    <button className="button learn-more" onClick={editOnClick}>
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">EDIT</span>
                                    </button>
                                </div>
                                <div className="button-wrap">
                                    <button className="button learn-more" onClick={deleteOnClick}>
                                        <span className="circle" aria-hidden="true">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">DELETE</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPostItem;