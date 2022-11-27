import { toast } from "react-toastify";

export const postUser=(data)=>{
    fetch('http://localhost:5000/user', {
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