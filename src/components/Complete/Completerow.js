import React from 'react';

const Completerow = ({complete}) => {
    const {todoimg, todoname, time, _id} = complete
    
    const handaleDete = id => {
        fetch(`https://server-steel-two.vercel.app/complete/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(data => console.log(data))
    }
     return (
        <tr>
        <img style={{ width: "100px", padding: "5px" }} src={todoimg} alt="" />
        <td>{todoname}</td>
        <td>{time.slice(0, -5)}</td>
        <td>
          <button onClick={() => handaleDete(_id)}>Delete</button>
        </td>
        
      </tr>
    );
};

export default Completerow;