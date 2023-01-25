import React from "react"

export default function BlogPost (props) {
    return (
        <div className="blogpost-container">
            <a id="blog-title">{props.title}</a>
            <a id="blog-subtitle">{props.subTitle}</a>
            <p>Posted by <a>{props.author}</a> on {props.date}</p>
        </div>
    )
}