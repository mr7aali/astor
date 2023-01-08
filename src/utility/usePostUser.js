import { toast } from "react-toastify";

const postUser =(data)=>{
    fetch('https://astor-server.vercel.app/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
            .then(data => {
                console.log(data) ;
                toast(`User added Successfully `);        
            })
}
export default postUser;