import React from 'react'
import { useSelector } from "react-redux";
const ProductHoverThree = () => {
    // Get Data from Global State
    let products = useSelector((state) => state.products.products);
    return (
        <>
            <section className="product_hover_Widget ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_hover_heading padd-bottom">
                                <h2>Product Hover Three</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductHoverThree