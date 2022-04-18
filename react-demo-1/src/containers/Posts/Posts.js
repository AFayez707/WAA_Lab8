import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import axios from "axios";
<<<<<<< Updated upstream

=======
import {PostContext} from "../../pages/dashboard/Dashboard";
import {Link} from "react-router-dom";
import {Selected} from "../../store/Selected";
import PostDetails from "../../components/PostDetails/PostDetails";
>>>>>>> Stashed changes

const Posts = (props) => {

    console.log("Post UPDATE");
<<<<<<< Updated upstream
=======
    const setSelected = useContext(Selected);

>>>>>>> Stashed changes

    const [posts, setPosts] = useState([{id: 1, title: "iphone 13", content: "iphone 13", author: 1100},])
    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // fetchProducts();    TRY THIS 
    useEffect(() => {
        fetchProducts()
    }, [props.fetchFlag]) //ADD THIS LATER - props.fetchFlag


    const postsList = posts.map(product => {
<<<<<<< Updated upstream
        return <Post
            title={product.title}
            author={product.author}
            post={product}
            content={product.content}
            id={product.id}
            key={product.id}
            setSelected={() => { props.setSelected(product.id) }}
        />
=======
        console.log("sada",product.id)
        return (<Link to={`${product.id}`} key={product.id}>
                <Post
                    title={product.title}
                    author={product.author}
                    content={product.content}
                    id={product.id}
                    key={product.id}
                />
            </Link>);
>>>>>>> Stashed changes
    });

    return <div className="Product">
        {postsList}
        <PostDetails/>
    </div>
}
export default Posts;