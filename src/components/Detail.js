import React, {useState, useEffect} from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import styled from 'styled-components'
import img16 from '../assets/images/play-icon-black.png'
import img17 from '../assets/images/play-icon-white.png'
import img18 from '../assets/images/group-icon.png'
import { useLocation, useParams } from "react-router-dom"
import {db} from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import ReactPlayer from 'react-player'

function Detail() {
    const[showVideo, setShowVideo]=useState(false)
    const {id} = useParams();
    const[movie,  setMovie]= useState();


    const getMovie = async()=> {
      const movie = collection(db, 'movies');
      const q = query(movie, where("id", "==", id))
      const moviesSnapshot = await getDocs(q);
      const m = moviesSnapshot.docs.map(doc => doc.data());
        console.log(m[0])
      return m[0];
    }
    useEffect((key)=>{
      getMovie().then((doc)=>{setMovie(doc)}).catch()
    },[id])

    
    return (
        <> 
        {showVideo&&<ReactPlayerWrapper onClick={()=>setShowVideo(false)}>
            <ReactPlayer width="80%" height="80%" url={movie.trailer}/>
            </ReactPlayerWrapper>}
        <Container>
            <Background>
                <img src={movie&&movie.backgroundImg}></img>
                </Background>
            <ImageTitle>
                <img src={movie&&movie.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src={img16} />
                    <span>PLAY</span>
                </PlayButton>
                {movie&&movie.trailer&&<TrailerButton onClick={()=>{setShowVideo(!showVideo)}}>
                    <img src={img17} />
                    <span>TRAILER</span>
                </TrailerButton>}
                
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src={img18} />
                </GroupWatchButton>

            </Controls>
            <SubTitle>
                {movie&&movie.year&&movie.year} * {movie&&movie.duration&&movie.duration}m * {movie&&movie.genre&&movie.genre.map((g)=>{
                    return <Genre>{g}</Genre>
                })}
            </SubTitle>
            <Description>
                {movie&&movie.description}
            </Description>
        </Container>
        </>
    ) 
}

export default Detail

const ReactPlayerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: absolute;
`
const Genre = styled.span`
    padding: 0 10px;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    
    

    img{
        
        width: 100%;
        height: 100%;
        
        background-size: cover;
        

        @media (max-width: 768px) {
      width: initial;
    }
    }
`

const ImageTitle = styled.div`
    height: 45vh;
    min-height: 170px;
    width: 10vw;
    min-width: 200px;
    //margin-top: 5px;
    

    img{
        width: 100%;
        height: 70%;
        margin: 50px;
        margin-top: 85px;
        //object-fit: cover;
        border-radius: 5%;
    }

`

const Controls = styled.div`
    display: flex ;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font: 15px;
    min-height: 20px;
    margin-top: 26px;
    text-shadow: 2px 2px black;
    
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    box-shadow: black;
    max-width: 760px;
    text-shadow: 2px 2px black;

`