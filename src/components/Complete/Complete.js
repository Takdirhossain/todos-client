import React, { useEffect, useState } from 'react';
import Completerow from './Completerow';

const Complete = () => {
    const [completed, setCompleted] = useState([])
    useEffect(() => {
        fetch('https://server-steel-two.vercel.app/complete')
        .then(res => res.json())
        .then(data => setCompleted(data))
    },[completed])
    return (
        <table>
      <tr className="tablenav">
        <th>Image</th>
        <th>name</th>
        <th>Time</th>
        <th>Delete?</th>
       
      </tr>
  {
    completed.map(complete => (<Completerow complete={complete}></Completerow>) )
  }
    </table>
 
    );
};

export default Complete;