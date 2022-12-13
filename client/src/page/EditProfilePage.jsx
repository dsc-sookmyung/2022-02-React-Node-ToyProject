import { React, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProfilePage(props) {
    const server = 'http://3.35.184.0:3000'
    const navigate = useNavigate()

    // 비밀번호, 비밀번호 확인, 닉네임
    const loginId = sessionStorage.getItem("loginId")
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // 오류 메시지
    const [nicknameMessage, setNicknameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('')

    // 유효성 검사
    const [isNickname, setIsNickname] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isConfirmPassword, setIsConfirmPassword] = useState(false)

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            if((password===confirmPassword)&&nickname){
                e.preventDefault()
                try {
                    await axios
                    .put(`${server}/user/${loginId}`, {
                        nickname: nickname,
                        password: password
                    })
                    .then((res) => {
                        console.log('response:', res)
                        if (res.status === 200) {
                            sessionStorage.setItem("loginId", res.data.data._id)
                            sessionStorage.setItem("loginNickname", nickname)
                            alert('회원 정보가 변경되었습니다.')
                            navigate('/blog/:userId')
                            window.location.reload()
                        }
                    })
                } catch (err) {
                    console.error(err)
                }
            } else {
                alert('회원 정보를 다시 입력해 주세요.')
            }
            
        }, [nickname, password, navigate]
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
            <span class="title_box">Edit Profile</span>
            {/*<div class="div_box">
                ID
                <input class="input_box" id="id" placeholder={id}
                    readOnly="true" />
            </div>
            */}
            <div class="div_box">
                Nickname
                <input class="input_box" id="nickname" placeholder="Nickname"
                    value={nickname} onChange={handleNickname} />
                {nickname.length > 0 && <div class="message" id={`message ${isNickname ? true : false}`}>{nicknameMessage}</div>}
            </div>
            <div class="div_box">
                Password
                <input class="input_box" id="password" placeholder="Password"
                    type="password" onChange={handlePassword} />
                {password.length > 0 && (
                    <div class="message" id={`message ${isPassword ? true : false}`}>{passwordMessage}</div>)}
            </div>
            <div class="div_box">
                Confirm Password
                <input class="input_box" id="confirmPassword" placeholder="Confirm Password"
                    type="password" onChange={handleConfirmPassword} />
                {confirmPassword.length > 0 && (
                    <div class="message" id={`message ${isConfirmPassword ? true : false}`}>{confirmPasswordMessage}</div>
                )}
            </div>
            <div class="div_box">
                <button class="submit_box" type="submit">수정하기</button>
            </div>
        </form>
    )
}

export default EditProfilePage;