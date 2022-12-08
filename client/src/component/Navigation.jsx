import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
    const navigate = useNavigate()

    const handleSignOut = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        sessionStorage.clear()
        navigate('/blog')
        window.location.reload()
    }, [])

  return (
    <div id="root" className="navigate_wrapper">
        <div class="navigate_left"></div>
        <div class="navigate_mid">
            <a href="/blog">
                <div class="navigate_title">MY BLOG</div>
            </a>
        </div>
        {sessionStorage.getItem("loginId") ? (
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