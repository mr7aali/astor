import { toast } from "react-toastify";

export const postUser = (data) => {
    fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/user', {
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