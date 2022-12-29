import './update.scss'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Update = () => {
    const currentuser = useLoaderData()
    const navigate = useNavigate()
    const handalesubmit = e => {
        e.preventDefault()
        const update = e.target.updatename.value
        const data = {
            todoname: update
        }
        fetch(`https://server-steel-two.vercel.app/update/${currentuser._id}`, {
            method: 'put',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
          toast.success("Update Success")
          navigate('/mytodo')
        })
    
    }
    return (
        <div>
         <form onSubmit={handalesubmit} >
            <input type="text" name='updatename' defaultValue={currentuser.todoname} />
            <button type="submit">Update</button>
         </form>
        </div>
    );
};

export default Update;