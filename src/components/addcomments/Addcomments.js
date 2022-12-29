import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Addcomments = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
   const handalesubmit = e => {
    e.preventDefault()
    const comment = e.target.comment.value 
    const result = {
        mainid: data._id,
        comment: comment
    }
    fetch('https://server-steel-two.vercel.app/comment', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(result)
    }).then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success("comment add success")
            navigate('/mytodo')
        }
    })
   }
    return (
        <div>
            <form onSubmit={handalesubmit}>
                <input type="text" name='comment' />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default Addcomments;