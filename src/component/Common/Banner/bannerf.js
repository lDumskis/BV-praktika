import React from 'react'
import { Link } from 'react-router-dom';
const Bannerf = (props) => {
    return (
        <>
            <section id="common_banner_f">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="common_banner_text">
                                <h2>{props.title}</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li className="slash">/</li>
                                    <li className="active">{props.title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bannerf