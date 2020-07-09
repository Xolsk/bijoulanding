import React, { useState, useEffect } from 'react';
import {
    useParams, Redirect,
} from "react-router-dom";
import ResetPasswordForm from "./ResetPasswordForm";


export default function ResetPassword() {

    let { token } = useParams();
    const [tokenCheckComplete, setTokenCheckComplete] = useState(false);
    const [tokenStatus, setTokenStatus] = useState(false);

    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("access-token", token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        setTokenCheckComplete(false);
        setTokenStatus(false);


        fetch("http://localhost:4000/verifyemailtoken", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === "Access Granted") {
                    setTokenStatus(true);
                    setTokenCheckComplete(true);

                }
                else{

                    setTokenStatus(false);
                    setTokenCheckComplete(true);
                }

            })
            .catch(error => {
                setTokenCheckComplete(true);
                setTokenStatus(false);
              });

    }, [token]);


    if (!tokenCheckComplete) {
        return( <div className="app"> Loading...</div>);
    }

    return tokenStatus ? (
                <ResetPasswordForm token={token}/>
    ) : (
            <Redirect app="/home" />
        );


}


