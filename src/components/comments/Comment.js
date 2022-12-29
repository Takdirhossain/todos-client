import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Comment = () => {
    const maintodo = useLoaderData()
    const [comments, setComments] = useState([])
    useEffect(() => {
fetch('https://server-steel-two.vercel.app/comment')
.then(res => res.json())
.then(data => {
    const allcomments = data.filter(comm => {
      return  comm.mainid === maintodo._id
    })
    setComments(allcomments)
})
    },[maintodo._id ])
    console.log(comments)
    return (
        <div>
           {
            comments.map(comm => <>
            <p>{comm.comment}</p>
            </>)
           }
        </div>
    );
};

export default Comment;