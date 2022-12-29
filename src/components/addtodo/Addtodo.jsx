import './addtodo.scss'
import { toast } from "react-hot-toast";

const Addtodo = () => {
  const handalesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const name = form.todoname.value;
    const d = new Date();
    
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=cfdf6b052709dd278427a89a5cbb7e1d";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const data = {
          todoimg: imageData.data.url,
          todoname: name,
          time: d
        }
        
        fetch('https://server-steel-two.vercel.app/', {
        method: "POST",
        headers: {
         "content-type": "application/json" 
        },
        body: JSON.stringify(data)

      }).then(res => res.json())
     .then(result => {
      if(result.acknowledged){
        toast.success("ToDo Added Success")
        form.reset()
      }
     })
      });
      
  };
  return (
    <form onSubmit={handalesubmit}>
      <h1>Add you ToDo </h1>
      <div>
        <input type="file" id="image" name="image" accept="image/*" />
      </div>
      <input
        className="input"
        type="text"
        name="todoname"
        placeholder="add your todo"
      />
      
      <button type="submit">Add ToDo</button>
    </form>
  );
};

export default Addtodo;
