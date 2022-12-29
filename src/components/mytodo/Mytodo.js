import { useEffect, useState } from "react";
import "./mytodo.scss";

import Mytodorow from "./Mytodorow";
const Mytodo = () => {
  const [todos, setData] = useState([]);
  useEffect(() => {
    fetch("https://server-steel-two.vercel.app/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [todos, setData]);
 

  return (
    <table>
      <tr className="tablenav">
        <th>Image</th>
        <th>name</th>
        <th>Time</th>
        <th>Progress</th>
        <th>Update</th>
        <th>Details</th>
        <th>Comment</th>
      </tr>
   {
    todos.map(todo => (<Mytodorow todos={todos} setData={setData} todo={todo}></Mytodorow>))
   }
    </table>
  );
};

export default Mytodo;
