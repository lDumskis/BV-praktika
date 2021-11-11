import React from 'react'
import Header from '../../component/Common/Header'
import Banner from '../../component/Common/Banner'
import ShopElectronics from '../../component/Shop/ShopElectronics'
import Footer from '../../component/Common/Footer'

const ShopGride = () => {
    return (
        <>
            <Header />
            <Banner title="Shop" />
            <ShopElectronics />
            <Footer />
        </>
    )
}

export default ShopGride