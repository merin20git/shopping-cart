import React, { useState } from 'react'
import ProductNavbar from './ProductNavbar'

const ViewAllProduct = () => {
    const [productData, changeProduct] = useState(
        [
            { "id": "1", "title": "Sandal", "price": "1500", "description": "Step into comfort and style", "category": "shoe", "image": "https://th.bing.com/th/id/OPAC.BowIpLC6e0C0QQ474C474?w=200&h=220&c=17&dpr=1.5&pid=21.1", "rating": "4.5", "count": "10" },
            { "id": "2", "title": "Office chair", "price": "7000", "description": "rotating and Back pain free", "categry": "chair", "image": "https://ik.imagekit.io/2xkwa8s1i/img/chairs/Images13/WSCHRMATIZMBPBBKBKBK_LS_1.jpg?tr=w-1200", "rating": "4.0", "count": "30" },
            { "id": "3", "title": "chair", "price": "13000", "description": "lightwood", "categry": "chair", "image": "https://ik.imagekit.io/2xkwa8s1i/img/SofaBLZPDMRPlife/Sofalifestyle/WSFADMRPN1FRGN.jpg?tr=w-1200", "rating": "5", "count": "45" },
            { "id": "4", "title": "Sofa", "price": "20000", "description": "cushion and lightweight", "categry": "sofa", "image": "https://ik.imagekit.io/2xkwa8s1i/img/sofa-sets/solatio/fjsg/1.jpg?tr=w-1200", "rating": "3.5", "count": "20" },
        ]
    )
    return (
        <div>
            <ProductNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {productData.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card" >
                                               
                                                <div class="card-body">
                                                     <img src={value.image} class="card-img-top" alt="..." />
                                                    <h5 class="card-body">{value.title}</h5>
                                                    <p>{value.price}</p>
                                                    <p class="card-text">{value.description}</p>
                                                    <p>{value.category}</p>
                                                    
                                                    <p>{value.rating}</p>
                                                    <p>{value.count}</p>
                                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct