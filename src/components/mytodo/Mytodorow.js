import React from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Mytodorow = ({ todo, todos, setData }) => {
  const { todoimg, todoname, time, _id } = todo;
  const completetime = new Date();
  const handalecomplete = (id) => {
    const data = {
      todoId: id,
      todoimg: todoimg,
      todoname: todoname,
      time: completetime,
    };
    fetch("https://server-steel-two.vercel.app/complete", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.acknowledged){
        toast.success("Todo Complete success")
        fetch(`https://server-steel-two.vercel.app/${id}`,{
            method: 'delete'
        }).then(res => res.json())
        .then(data => {
           console.log(data)
        })
       }
      });
  };

  return (
    <tr>
      <img style={{ width: "100px", padding: "5px" }} src={todoimg} alt="" />
      <td>{todoname}</td>
      <td>{time.slice(0, -5)}</td>
      <td>
        <button onClick={() => handalecomplete(todo._id)}>Complete</button>
      </td>
      <td><button><Link to={`/update/${_id}`}>Update</Link></button></td>
      <td><button><Link to={`/comment/${_id}`}>Details</Link></button></td>
      <td className="comment">
       <Link to={`/addcomment/${_id}`}> <AddCommentIcon /></Link>
      </td>
    </tr>
  );
};

export default Mytodorow;
