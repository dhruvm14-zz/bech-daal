import {useHistory} from "react-router-dom"
import React, {useState} from 'react'
import styles from './../styles/SignUp.module.css'
import axios from 'axios'

export default function SignUp(props) {

    const {
        swap
    } = props

    const history = useHistory()

    const [name, setName] = useState('')
    const [uName, setUName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [agreeLocation, setAgreeLocation] = useState(false)
    const [agreeTNC, setAgreeTNC] = useState(false)


    const submit = () => {
        if(!agreeLocation || !agreeTNC) return
        const data = {
            name,
            username : uName,
            email,
            password
        }
        console.log(data)
        axios.post("http://localhost:5000/users/addUser", data).then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            history.push("/")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.border}>
                <h1>Sign Up</h1>
                <div className={styles.row1}>
                    <input name="name" type="text" value={name} placeholder="Full Name" onChange={e => setName(e.target.value)}/>
                    <input name="uName" type="text" value={uName} placeholder="User Name"  onChange={e => setUName(e.target.value)}/>
                </div>
                <input name="email" type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <input name="password" type="password" value={password} placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                <input name="cPassword" type="password" value={cPassword} placeholder="Confirm Password"  onChange={e => setCPassword(e.target.value)}/>
                <label>
                    <input type="checkbox" name="agreeLocation" value={agreeLocation} onChange={e => setAgreeLocation(e.target.value)}/>
                    <p>I agree to share my location</p>
                </label>
                <label>
                    <input type="checkbox" name="agreeTNC" value={agreeTNC} onChange={e => setAgreeTNC(e.target.value)}/>
                    <p>I agree on terms and conditions</p>
                </label>

                <button onClick={() => submit()}>Sign Up</button>
                <p>Already have account? <p onClick={() => swap()}>Sign In</p></p>
            </div>
        </div>
    )
}
