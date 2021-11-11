import React from 'react'
import Header from '../../component/Common/Header'
import Bannerf from '../../component/Common/Banner/bannerf'
import ShopFurniture from '../../component/Shop/ShopFurniture'
import Footer from '../../component/Common/Footer'

const ShopGridf = () => {
    return (
        <>
            <Header />
            <Bannerf title="Shop" />
            <ShopFurniture />
            <Footer />
        </>
    )
}

export default ShopGridf