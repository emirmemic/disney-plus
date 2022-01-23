import React from 'react'
import styled from 'styled-components'
import img19 from '../assets/images/login-background.jpg'
import img20 from '../assets/images/cta-logo-one.svg'
import img21 from '../assets/images/cta-logo-two.png'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, setUserLogin } from '../features/user/userSlice'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'


function Login() {

const dispatch = useDispatch();

  const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
  const signIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    
    dispatch(setUserLogin({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }))
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }
    return (
        <Container bgImage19={img19}>
            <CTA>
                <CTALogoOne src={img20} />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional
                    fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ 
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src={img21} />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px); 
    display: flex;
    align-items: top;
    justify-content: center;

    &:before { 
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.7;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        background-image: url(${(props) => props.bgImage19})
     ;

    }

`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;


`

const CTALogoOne = styled.img`

`
const CTALogoTwo = styled.img`
    width: 90%;
`
const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background: #0483ee;
}

`

const Description = styled.p`
    font-size: 14px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`