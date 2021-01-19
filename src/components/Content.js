import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import Posts from "./Posts";
import Post from "./Post";
import TwitterIcon from '@material-ui/icons/Twitter';
import "./Content.css";

export class Content extends Component {
    state = {
        posts: []
    }

    // const [posts, setPosts] = useState([]);
    post = (text, username) => {
        const newPost = {
            id: uuidv4(),
            username: username,
            text: text
        }
        this.setState({posts: [...this.state.posts, newPost]});
        console.log(newPost.id);
    }
    render(){
        return (
            <div className="content">
                <div className="content__header">
                    <h2>Home</h2>
                </div>
                <TwitterIcon/>
                <Post post={this.post}/>
                {this.state.posts.map(posts =>(
                    <Posts username={posts.username} text={posts.text}/>
                ))}
            </div>
        )
    }  
}

export default Content
