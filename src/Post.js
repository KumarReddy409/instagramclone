import React from 'react';
import './Post.css';
import pic from './assets/instagram.png';
import pic1 from './assets/user.png';
import Avatar from '@material-ui/core/Avatar';

const Post=(props)=>{
    return(
        <div className="post">
            <div className="post_header">
            <Avatar className="post_avatar" src={pic1} alt="helo"/>
                <h1>{props}</h1>
            <h3>{props.username}</h3>
            </div>
            <img className="post_image" src={pic} alt=""></img>
            <h4 className="post_text"><strong>{props.username}:</strong>{props.caption}</h4>
        </div>
    )
}

export default Post