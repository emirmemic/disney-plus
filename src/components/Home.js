import React, { useEffect } from "react";
import styled from "styled-components";
import img7 from "../assets/images/home-background.png";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react";
import dummyMovies from "../dummyMovies"

function Home() {

  const[movies, setMovies]= useState()

  const getMovies = async()=> {
    const movies = collection(db, 'movies');
    const moviesSnapshot = await getDocs(movies);
    const moviesList = moviesSnapshot.docs.map(doc => doc.data());
    console.log("belaa")

    return moviesList;
  }
  //useEffect(()=>{
    //getMovies().then((res)=>{setMovies(res)}).catch()
  //},[])
 
  useEffect(()=>{
    setMovies(dummyMovies)
  }, [])


  return (
    <Container bgImage={img7}>
      <ImgSlider />
      <Viewers />
      <Movies movies={movies}/>
    </Container>
  )
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(${(props) => props.bgImage}) center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
