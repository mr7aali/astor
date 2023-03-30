import { useContext } from "react";
import { toast } from "react-toastify";

export const postUser = (data) => {
    fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast(`User added Successfully `);
        })
}

export const shortedWithId = (data) => {
    const sortedCart = [...data]?.sort((a, b) => {
        const timestampA = new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
        const timestampB = new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
        return timestampA - timestampB;
    });
    return sortedCart;
}



export const DeletePhone = (id) => {
    console.log("Delete Function called" , id);
    fetch(`http://localhost:5000/deletePhone?id=${id}`, {
        method: 'DELETE'
    })

        .then(res => res.json())
        .then(data => {
            console.log(data);

        })
}