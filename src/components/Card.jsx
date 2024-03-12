import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Card = (props) => {
  return (
    <div>
        <div class="card" style={{width: "18rem"}}>
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description} white sneakers</p>
                <p className="card-text">${props.price}</p>
                <div className='mb-3 d-flex justify-content-evenly'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <a href="#" class="btn btn-primary w-100"><MdShoppingCart /> Add to cart</a>
            </div>
            </div>
    </div>
  )
}

export default Card