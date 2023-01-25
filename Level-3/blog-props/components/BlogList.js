import React from "react"
import BlogPost from "./BlogPost"
import data from "../data"

export default function BlogList () {
        const blogPost = data.map(item => {
        return (
            <BlogPost 
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div className="bloglist-container">
            {blogPost}
            <a href="" className="btn"><button>OLDER POSTS →</button></a>
        </div>
    )
}