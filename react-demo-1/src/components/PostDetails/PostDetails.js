import React, {useEffect, useState} from 'react';
import axios from "axios";
import './PostDetails.css'
import {Fragment} from "react";
import Comment from "../Comment/Comment";
import Comments from "../../containers/Comments/Coments";
<<<<<<< Updated upstream
const PostDetails = ({ id, setSelected, changeFetchFlag }) => {
    const [postDetail, setPostDetail] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts/' + id+ '/comments')
            .then(response => {
                console.log(response.data)
                setPostDetail(response.data)
            }).catch(err => console.log(err.message))
    },[id]);
=======
import {PostContext} from "../../pages/dashboard/Dashboard";
import { useNavigate,useParams } from 'react-router-dom';


const PostDetails = () => {
    const navigate = useNavigate();
    const params = useParams();

    console.log("POSTDETAILS UPDATE");

    const [postDetail, setPostDetail] =  useState([]);;


    useEffect(
        () => {
            axios.get('http://localhost:8080/api/posts/' + params.id + '/comments')
                .then(response => {
                    setPostDetail(response.data)
                    console.log("postDetail:", postDetail)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [params.id])


    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/posts/' + id)
            .then(response => {
                navigate("/");
            })
            .catch(err => {
                console.error(err);
            })
>>>>>>> Stashed changes

    const deleteButtonClicked = (id) => {
      axios.delete('http://localhost:8080/api/posts/' +id)
          .then(response=>{
              console.log("Deleted successfully");
              changeFetchFlag();
              setSelected(0);
          }).catch(err=> console.log(err.message))
    }

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;
<<<<<<< Updated upstream
    let postDetailDisplay = null;
    console.log(id)
    if(id!==0){
         postDetailDisplay = (
         <div className="PostDetail">
             <div>
                 {postDetail.title}
             </div>
             <h1> {postDetail.title}</h1>
             <div >
                 {postDetail.content}
                 <br />
                 <div style={{ textAlign: "left" }}>
                      {space} Comments <br />
                     {postDetail.comments != null ? (
                         <Comments comments={postDetail.comments} />
                     ) : null}
                 </div>

             </div>
             <button onClick={ () => {deleteButtonClicked(id)}}> Delete</button>
         </div>
     )
=======

    let productDetailsDisplay = null;
    if (params.id) {
        productDetailsDisplay = (

            <div className="PostDetail">
                <h1>Post Detials</h1>
                <div>
                     <br/>
                    <div style={{textAlign: "left"}}>
                        {space} Reviews <br/>
                        <Comments comment={postDetail} key={params.id}/>


                     </div>


                </div>
                <button onClick={() => {
                    deleteButtonClicked(params.id)
                }}> Delete
                </button>
            </div>
        );
>>>>>>> Stashed changes
    }
return postDetailDisplay

}

export default PostDetails;