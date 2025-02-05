import twitterBanner from "../../Images/twitter_banner.png";
import twitterLogo from "../../Images/twitter-logo.png";
import googleLogo from "../../Images/google_logo.png";
import appleLogo from "../../Images/apple_logo.png";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";

const Login = () => {

    const {isAuth} = useContext(AuthContext);

    const [loginForm,setLoginForm] = useState(false);

    const openLoginForm = () => {
        if(loginForm){
            setLoginForm(false)
        }else{
            setLoginForm(true)
        }
    }
    
    return (!isAuth) ? (
        <div className={style.loginPage}>
            <div className={style.row}>
                <div><img src={twitterBanner}/></div>
                <div className={style.col_2}>
                    <img src={twitterLogo}  className={style.twitterLogo}/>
                    <h1>Happening now</h1>
                    <h2>Join Twitter today.</h2>

                    <button> <img src={googleLogo}/> Sign in with Google</button> <br/>
                    <button> <img src={appleLogo}/> Sign in with Apple</button> <br/>
                    <button onClick={openLoginForm}>Use phone, email or username</button>

                    <p>Don't have an account? <Link to={'/signup'}><span className={style.SigninLink}>Sign up</span> </Link> </p>
                </div>
            </div>

            <ul className={style.footerLinks}>
                <li>About</li>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Ads info</li>
                <li>Blog</li>
                <li>Status</li>
                <li>Careers</li>
                <li>Brand Resources</li>
                <li>Advertising</li>
                <li>Marketing</li>
                <li>Twitter for Business</li>
                <li>Developers</li>
                <li>Directory</li>
                <li>Settings</li>
            </ul>
            <p className={style.copyRight}>© 2021 Twitter, Inc.</p>
            <div style={{display: loginForm ? "flex" : "none"}}>
                <LoginForm  cancelForm={openLoginForm}/>
            </div>
        </div>
    ):(
         <Redirect to={"/"}  />
    )
}

export default Login;