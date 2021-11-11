import React from 'react'
import Header from '../../component/Common/Header'
import Bannerfa from '../../component/Common/Banner/bannerfa'
import ShopFashion from '../../component/Shop/ShopFashion'
import Footer from '../../component/Common/Footer'

const ShopGridfa = () => {
    return (
        <>
            <Header />
            <Bannerfa title="Shop" />
            <ShopFashion />
            <Footer />
        </>
    )
}

export default ShopGridfa