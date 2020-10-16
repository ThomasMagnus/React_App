import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css'

const PostList = ({posts, onDelete}) => {
    const elem = posts.map(item => {
        return (
            <li key = {item.id} className="list-group-item">
                <PostListItem
                    label={item.label}
                    important = {item.important}
                    onDelete = {({id}) => console.log(item.id)}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default PostList
