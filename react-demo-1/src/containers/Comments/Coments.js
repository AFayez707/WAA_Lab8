import React from 'react'
import Comment from "../../components/Comment/Comment"

const Comments = (props) => {
<<<<<<< Updated upstream

    console.log("props");
    console.log(props);


    const comments = props.comments.map((comment) => {
=======
    console.log("sddda",props.comment)
    const comments = props.comment.map((comment) => {
>>>>>>> Stashed changes
        return <Comment key={comment.id} comment={comment}/>;
    });
    return comments;
};

export default Comments;
