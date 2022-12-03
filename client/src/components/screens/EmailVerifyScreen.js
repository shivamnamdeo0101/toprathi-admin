import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UserService from "../../service/api/UserService";
import "./ResetPasswordScreen.css";
import { useSelector } from "react-redux";

const EmailVerifyScreen = ({ history, match }) => {

    const { emailToken } = useParams();
    const { userEmailVerify } = UserService;
    const [success, setSuccess] = useState("");
    const [Error, setError] = useState("");

    useEffect(() => {

    }, [])


    const verify = async (e) => {
        e.preventDefault();

        try {
            const res = await userEmailVerify(emailToken)            
            if (res.success) {
                setSuccess(res.data)
                window.alert(res.data)
            } else {
                setError(res.data.error)
            }


        } catch (error) {
            setError(error.response?.data?.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="resetpassword-screen">
            <div
                className="resetpassword-screen__form"
            >
                <h3 className="resetpassword-screen__title">Email Verification</h3>
                {success && (
                    <p className="success-message">
                        {success} 
                    </p>
                )}
                {(Error && !success) && <p className="error-message"> {Error} </p>}
                
               {(!Error || !success) && <button type="submit" onClick={verify} className="btn btn-primary">
                    Click Here to verify
                </button>}
            </div>
        </div>
    );
};

export default EmailVerifyScreen;
