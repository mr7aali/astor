import { toast } from "react-toastify";

const postUser =(data)=>{
    fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/user', {
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