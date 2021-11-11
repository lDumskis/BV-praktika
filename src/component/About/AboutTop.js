import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.jpg'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={img1} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT OUR Support-Sandbox</h2>
                                <h4>We believe that every project existing in digital world is a result of an idea and every
                                    idea has a cause.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus metus consectetur tellus dignissim faucibus. Integer luctus aliquet lacus vitae volutpat. Maecenas ut eros ut augue viverra aliquet non id urna. Quisque consectetur varius vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                                <p>Donec suscipit, ante a rhoncus gravida, diam orci faucibus enim, at malesuada lacus orci quis urna. Praesent pretium erat turpis, ut auctor quam semper at. <strong>Lorem ipsum</strong> Suspendisse egestas suscipit pharetra. Suspendisse justo orci, sagittis quis laoreet ac, suscipit in felis. Cras laoreet sit amet odio at tincidunt</p>
                                <p>Ut tristique ipsum non aliquam condimentum. Nam eu dolor sed est consectetur pretium. Quisque elementum auctor efficitur. Sed varius <strong>Lorem ipsum</strong> Vestibulum sit amet purus placerat, tincidunt elit ac, pharetra diam. Sed interdum erat eget leo accumsan, vel commodo ante ultrices.</p>
                                <p>Nullam sagittis turpis sed laoreet interdum. Maecenas consectetur blandit porta. In vel libero ut risus finibus vulputate. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
