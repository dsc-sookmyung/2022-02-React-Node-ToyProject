import React from "react";
import { useNavigate } from "react-router-dom";

function tmpPost(props) {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper} onClick={() => navigate(`/post/${props.id}`)}>
      <div style={styles.contentContainer}>
        <div>익명</div>
        <div>{props.title}</div>
        <div>{props.image}</div>
        <div>{props.content}</div>
        <div>{props.created_at}</div>
      </div>
    </div>
  );
}

export default tmpPost;