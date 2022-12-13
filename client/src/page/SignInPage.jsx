import { React, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignInPage(props) {
    const server = 'http://3.35.184.0:3000'
    const navigate = useNavigate()
    const sessionStorage = window.sessionStorage

    // 닉네임, 비밀번호
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            try {
                await axios
                .post(`${server}/user/login`, {
                    nickname: nickname,
                    password: password
                })
                .then((res) => {
                    console.log('response:', res)
                    if (res.status === 200) {
                        sessionStorage.setItem("loginId", res.data.data._id)
                        sessionStorage.setItem("loginNickname", nickname)
                        navigate("/")
                        window.location.reload()
                    }
                })} catch (err) {
                    console.error(err)
                }
            }, [nickname,password, navigate]
    )
    
    const handleNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
    }, [])

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <span class="title_box">SignIn</span>
            <div class="div_box">
                Nickname
                <input class="input_box" id="nickname" placeholder="Nickname"
                    value={nickname} onChange={handleNickname} />
            </div>
            <div class="div_box">
                Password
                <input class="input_box" id="password" placeholder="Password"
                    type="password" onChange={handlePassword} />
            </div>
            <div class="div_box">
                <button class="submit_box" type="submit">로그인하기</button>
            </div>
        </form>
    )
}

export default SignInPage;