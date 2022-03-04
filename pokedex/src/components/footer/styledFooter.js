import styled, {keyframes} from "styled-components";

const animationBot = keyframes`
0%{
    
    height: 30px;
    z-index:6;
}
40%{
    height: 50vh;
    z-index:6;
    
    

}
80%{
    height: 30px;
    z-index:6;
    opacity: 1.0;
    
}
100%{
    
}
`

export const FooterStyle=styled.div`
animation-name: ${animationBot};
animation-duration: 3s;
width: 100vw;
height: 30px;
border-top: 5px solid black;
position: fixed;
bottom: 0px;
right: 0px;
z-index: 7;
background-color: white;

div{
    display: inline-block;
    z-index: 7;
    opacity: 1;
    width: 20px;
    height: 20px;
    margin: 0;
    border: 4px solid black;
    background-color: white;
    border-radius: 20px;
    position: relative;
    top: -20px;
    left: 49.5vw;

    div{
        z-index: 7;
        opacity: 1;
        width: 14px;
        height: 14px;
        border: 1px solid grey;
        background-color: white;
        border-radius: 20px;
        position: relative;
        left:7.5%;
        top:7%;
    }

}
p{  
    display: inline;
    width: 100vw;
    font-size: small;
    position: relative;
    left: 88vw;
    top: -1px;
    color: goldenrod;
}

`
export const FakeFooter = styled.div`
width: 100vw;
height: 30px;
`