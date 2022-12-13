import { React, createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({ login: false, setLogin: () => {} })

function Navigation(props) {
    const Navigate = useNavigate();

    const [login, setLogin] = useState(false)

    const getLogin = async () => {
        if(await sessionStorage.getItem("loginId") !== null){
            setLogin(true)
        } else {
            setLogin(false)
        }
    }

    useEffect(() => {
        getLogin()
    }, [login]);

    const handleSignOut = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        sessionStorage.clear()
        setLogin(false)
        Navigate("/");
    }, [])

  return (
    <div id="root" className="navigate_wrapper">
        <div className="navigate_left"></div>
        <div className="navigate_mid">
            <a href="/">
                <div className="navigate_title">MY BLOG</div>
            </a>
        </div>
        {login ? (
            <div className="navigate_right">
                <a href="/blog/:userId">
                    <div className="navigate_title">MY PAGE</div>
                </a>
                <div className="navigate_title" onClick={handleSignOut}>SIGNOUT</div>
            </div>
        ) : (
            <div className="navigate_right">
                <a href="/user/signup">
                    <div className="navigate_title">SIGNUP</div>
                </a>
                <a href="/user/login">
                    <div className="navigate_title">SIGNIN</div>
                </a>
            </div>
        )}
    </div>
    )
}

export default Navigation;