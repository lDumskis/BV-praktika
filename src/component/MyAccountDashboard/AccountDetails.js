import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/img/team/team1.png'
const AccountDetails = () => {
    return (
        <>
            <div className="myaccount-content">
                <div className="save_button mt-3 d-flex align-items-center justify-content-between">
                    <h4 className="title">Account details</h4>
                    <Link to="/account-edit" className="theme-btn-one bg-black btn_sm">Update Account</Link>
                </div>
                <div className="login_form_container">
                    <div className="account_details_form">
                        <form action="#">
                            <div className="img_profiles">
                                <img src={img1} alt="img" />
                            </div>
                            <div className="input-radio">
                                <span className="custom-radio">
                                    <input type="radio" defaultValue="1" name="mr" checked readOnly /> Mr.</span>
                            </div>
                            <div className="default-form-box mb-20">
                                <label>First Name</label>
                                <input type="text" name="first-name" className="form-control" defaultValue="Lukas"
                                    readOnly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Last Name</label>
                                <input type="text" name="last-name" className="form-control" defaultValue="Dumskis"
                                    readOnly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Email</label>
                                <input type="text" name="email-name" defaultValue="lukas.dumskis@bazaarvoice.com"
                                    className="form-control" readOnly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Password</label>
                                <input type="password" name="user-password" defaultValue="123456789"
                                    className="form-control" readOnly />
                            </div>
                            <div className="default-form-box mb-20">
                                <label>Birthdate</label>
                                <input type="date" name="birthday" defaultValue="1996-06-11"
                                    className="form-control" readOnly />
                            </div>
                            <span className="example">
                                (E.g.: 05/31/1970)
                            </span>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails
