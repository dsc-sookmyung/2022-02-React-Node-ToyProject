import { React, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./User.css";

function SignUpPage(props) {
    // const server = "";
    const navigate = useNavigate();

    // 아이디, 비밀번호, 비밀번호 확인, 닉네임
    const [id, setId] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // 오류 메시지
    const [idMessage, setIdMessage] = useState('')
    const [nicknameMessage, setNicknameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('')

    // 유효성 검사
    const [isId, setIsId] = useState(false)
    const [isNickname, setIsNickname] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isConfirmPassword, setIsConfirmPassword] = useState(false)

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            try {
                /*
                await axios
                .post(`${server}/user/signup`, {
                    id: id,
                    password: password,
                    nickname: nickname,
                })
                .then((res) => {
                    console.log('response:', res)
                    if (res.status === 200) {
                        alert('회원가입이 완료되었습니다.')
                        navigate("/blog")
                    }
                })
                */
                alert('회원가입이 완료되었습니다.')
                navigate("/blog")
            } catch (err) {
                console.error(err)
            }
        }, [id, nickname, password, navigate]
    )
    
    const handleId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 10) {
            setIdMessage('4자 이상 10자 이하로 입력해주세요.')
            setIsId(false)
        } else {
            setIdMessage(' ')
            setIsId(true)
        }
    }, [])

    const handleConfirmId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault()
            try {
                /*
                await axios
                .get(`${server}/user/login`)
                .then((res) => {
                    console.log('response:', res)
                    if (res.status === 200) {
                        const users = await response.json();
                        const user = users.find((user) => user.id === id);
                        if (user) {
                            alert("이미 존재하는 ID입니다.");
                        } else {
                            alert("사용 가능한 ID입니다.");
                        }
                    }
                })
                */
                alert("사용 가능한 ID입니다.");
            } catch (err) {
                console.error(err)
            }
        }, //[id,password, navigate]
        [id, password]
    )

    const handleNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
        if (e.target.value.length < 1 || e.target.value.length > 20) {
            setNicknameMessage('1자 이상 20자 이하로 입력해주세요.')
            setIsNickname(false)
        } else {
            setNicknameMessage(' ')
            setIsNickname(true)
        }
    }, [])

    const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)

        if (passwordCurrent.length < 1 || passwordCurrent.length > 20) {
            setPasswordMessage('4자 이상 20자 이하로 입력해주세요.')
            setIsPassword(false)
        } else {
            setPasswordMessage(' ')
            setIsPassword(true)
        }
    }, [])

    const handleConfirmPassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPasswordCurrent = e.target.value
        setConfirmPassword(confirmPasswordCurrent)

        if (password !== confirmPasswordCurrent) {
            setConfirmPasswordMessage('비밀번호가 같지 않아요.')
            setIsConfirmPassword(false)
        } else {
            setConfirmPasswordMessage(' ')
            setIsConfirmPassword(true)
        }
    }, [password])

    return (
        <form onSubmit={handleSubmit}>
            <span class="title_box">SignUp</span>
            <div class="div_box">
                ID
                <input class="input_box" id="id" placeholder="ID"
                    value={id} onChange={handleId} />
                {id.length > 0 && <div class="message" id={`message ${isId ? true : false}`}>{idMessage}</div>}
                <button class="button_box"id="confirmId" onClick={handleConfirmId}>중복 확인하기</button>
            </div>
            <div class="div_box">
                Nickname
                <input class="input_box" id="nickname" placeholder="Nickname"
                    value={nickname} onChange={handleNickname} />
                {id.length > 0 && <div class="message" id={`message ${isNickname ? true : false}`}>{nicknameMessage}</div>}
            </div>
            <div class="div_box">
                Password
                <input class="input_box" id="password" placeholder="Password"
                    type="password" onChange={handlePassword} />
                {confirmPassword.length > 0 && (
                    <div class="message" id={`message ${isPassword ? true : false}`}>{passwordMessage}</div>)}
            </div>
            <div class="div_box">
                Confirm Password
                <input class="input_box" id="confirmPassword" placeholder="Confirm Password"
                    type="password" onChange={handleConfirmPassword} />
                {confirmPassword.length > 0 && (
                    <div class="message" id={`message ${isConfirmPassword ? true : false}`}>{confirmPasswordMessage}</div>)}
            </div>
            <div class="div_box">
                <button class="submit_box" type="submit">가입하기</button>
            </div>     
        </form>
    )
}

export default SignUpPage;