import React, { useEffect } from 'react'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import Cookie from '../Cookie'

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";

const FooterData = [
    {
        title: "INFORMATION",
        links: [
            { linkTitle: "Home", link: "/" },
            { linkTitle: "About us", link: "/about" },
            { linkTitle: "Privacy Policy", link: "/privacy-policy" },
            { linkTitle: "Frequently Questions", link: "/faqs" },
            { linkTitle: "Order Tracking", link: "/order-tracking" },
            { linkTitle: "Compare", link: "/compare" }
        ]
    },
    {
        title: "SHOP",
        links: [
            { linkTitle: "Cart View One", link: "/cart" },
            { linkTitle: "Cart View Two", link: "/cartTwo" },
            { linkTitle: "Empty Cart", link: "/empty-cart" },
            { linkTitle: "Checkout View One", link: "/checkout-one" },
            { linkTitle: "Checkout View Two", link: "/checkout-two" },
            { linkTitle: "Wishlist", link: "/wishlist" }
        ]
    }
]

const Footer = () => {
    let dispatch = useDispatch();

    let promoStatus = useSelector((state) => state.settings.promoStatus);
    let cookie = useSelector((state) => state.settings.cookie);
    let stopCookie = useSelector((state) => state.settings.stopCookie);

    useEffect(() => {
        if (promoStatus) {
            return
        } else {
            dispatch({ type: "settings/promoStatus" })
            setTimeout(function () {
                dispatch({ type: "settings/promoCenter" })
            }, 2000)
        }

        if (stopCookie) {
            return
        } else {
            setTimeout(function () {
                dispatch({ type: "settings/cookie" })
            }, 6000)
        }
    }, [dispatch, promoStatus, stopCookie]);


    const cancelCookie = () => {
        dispatch({ type: "settings/cookie" })
    }

    const acceptCookie = () => {
        // Write your function there
        dispatch({ type: "settings/cookie" })
    }

    return (
        <>
            <footer id="footer_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_left_side">
                                <Link to="/" ><img src={logo} alt="logo" /></Link>
                                <div className="footer_left_side_icon">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(0, 1).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            {FooterData.slice(1, 2).map((data, index) => (
                                <div className="footer_one_widget" key={index}>
                                    <h3>{data.title}</h3>
                                    <ul>
                                        {data.links.map((link, index) => (
                                            <li key={index}><Link to={link.link}>{link.linkTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        </div>
                    </div>
                </div>
                <div className="go-top active" onClick={()=> {window.scrollTo(0, 0)}}>
                    <i className="fa fa-chevron-up"></i>
                    <i className="fa fa-arrow-up"></i>
                </div>
            </footer>

            <section id="copyright_one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright_left">
                                <h6>© CopyRight 2021 <span>Bazaarvoice Technical Success</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                cookie ? <Cookie accept={acceptCookie} cancel={cancelCookie} /> : null
            }
        </>
    )
}

export default Footer