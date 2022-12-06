import { React, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from '../component/Navigation';

function SignInPage(props) {
    // const server = ''
    const navigate = useNavigate()
    const sessionStorage = window.sessionStorage
    const { login, setLogin } = useContext(LoginContext)

    // 아이디, 비밀번호
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            try {
                /*
                await axios
                .get(`${server}/user/login`)
                .then((res) => {
                    console.log('response:', res)
                    if (res.status === 200) {
                        const users = await response.json()
                        const user = users.find((user) => user.id === id)
                        if (!user || user.password !== password) {
                            alert("아이디 또는 비밀번호가 일치하지 않습니다.")
                        }
                        else {
                            sessionStorage.setItem("loginId", id)
                            navigate("/blog")
                        }
                    }
                })
                */ 
                    sessionStorage.setItem("loginId", id);
                    setLogin(true)
                    navigate("/blog")
                    window.location.reload()
                } catch (err) {
                    console.error(err)
                }
            }, [id,password, navigate]
    )
    
    const handleId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }, [])

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <span class="title_box">SignIn</span>
            <div class="div_box">
                ID
                <input class="input_box" id="id" placeholder="ID"
                    value={id} onChange={handleId} />
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