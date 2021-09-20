import React from 'react'
import { useState } from "react"

const data = () => {
    return ([
        {
            id: 1,
            name: "New Apple iPhone 11 (64GB) - Yellow",
            img: "https://m.media-amazon.com/images/I/714Mg+6MoFL._SL1500_.jpg",
            price: "51,999.00 Rs/-",
        },
        {
            id: 2,
            name: "New Apple iPhone 12 Mini (64GB) - Blue",
            img: "https://m.media-amazon.com/images/I/71sNNCTfMuL._SL1500_.jpg",
            price: "56,999.00 Rs/-",
        },
        {
            id: 3,
            name: "New Apple iPhone 11 (128GB) - Black",
            img: "https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",
            price: "12,990.00 Rs/-",
        },
        {
            id: 4,
            name: "New Apple iPhone XR (128GB) - Black",
            img: "https://m.media-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg",
            price: "46,499.00 Rs/-",
        },
        {
            id: 5,
            name: "New Apple iPhone 12 Pro Max (128GB)",
            img: "https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",
            price: "1,15,900.00 Rs/-",
        },
        {
            id: 6,
            name: "New Apple iPhone 12 Pro (128GB)",
            img: "https://m.media-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg",
            price: "1,06,900.00 Rs/-",
        },
    ])
}

const Store = () => {
     // eslint-disable-next-line
    const [mobiles, setMobiles]  = useState(data);
    return (
        <div className = "store" id = "Store">
            <h2> &#128722; Store</h2>
            {mobiles.map((item) => {
                return (
                    <div className = "items">
                         <h2>{item.name}</h2>  
                         <img src={item.img} alt="Mobile phone" height = "200rem" width = "200rem"/> 
                         <h2>{item.price}</h2>
                         <button className = "btn">Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Store
