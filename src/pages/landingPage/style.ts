import styled from 'styled-components';

export const MainContent = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
    align-items: center;
    margin: 10px auto;
    /* background-color: grey; */
` 
export const BackDropImage = styled.img`
    background-image: url("https://s2.glbimg.com/IY2JLz-flKqIoaaRs-uJQE6KWv0=/0x0:1032x581/1000x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/05/25/img-20160525-wa0037.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -1;
    filter: blur(6px);
    width: 100vw;
    height: 100vh;
    opacity: 0.6 ;
    
`
export const TitleContent = styled.header`
    font-size: 30px;
    border-radius: 5px;
    width: 30%;
    background-color: rgba(147,249,223,0.8);
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    margin: 15px;
`
export const TextContent = styled.section`
    background-color: rgba(147,249,223,0.8);
    width: 40%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;

`
export const ImagesContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
`
export const ContactContainer = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
`
export const Contact = styled.div`
    display: flex;
    padding: 5px;
    border-radius: 5px;
    width: 40%;
    margin: 5px;
    justify-content: space-around;
    align-items: center;
    &:hover{
        box-shadow: 2px 3px 10px -3px rgba(0, 0, 0, 0.85);
    }
`


export const AnchorLinks = styled.a`
    text-decoration: none;
    color: black;
   
`
export const ImageCats = styled.img`
    width: 200px; /* width of container */
    height: 200px; /* height of container */
    object-fit: cover;
    border: 2px solid black;
    border-radius:5px;
`