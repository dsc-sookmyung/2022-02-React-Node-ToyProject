import { React, createContext, useState, useEffect, useCallback } from "react";

export const LoginContext = createContext({ login: false, setLogin: () => {} })

function Navigation(props) {

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
    }, [])

  return (
    <div id="root" className="navigate_wrapper">
        <div class="navigate_left"></div>
        <div class="navigate_mid">
            <a href="/blog">
                <div class="navigate_title">MY BLOG</div>
            </a>
        </div>
        {login ? (
            <div class="navigate_right">
                <a href="/blog/:userId">
                    <div class="navigate_title">MY PAGE</div>
                </a>
                <div class="navigate_title" onClick={handleSignOut}>SIGNOUT</div>
            </div>
        ) : (
            <div class="navigate_right">
                <a href="/user/signup">
                    <div class="navigate_title">SIGNUP</div>
                </a>
                <a href="/user/login">
                    <div class="navigate_title">SIGNIN</div>
                </a>
            </div>
        )}
    </div>
    )
}

export default Navigation;