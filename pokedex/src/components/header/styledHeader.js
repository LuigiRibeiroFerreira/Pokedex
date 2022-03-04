import styled, {keyframes} from "styled-components";

const animationTop = keyframes`
0%{
    
    height: 86px;
    z-index:6;
}
40%{
    height: 50vh;
    z-index:6;
    
    

}
80%{
    height: 86px;
    z-index:6;
    opacity: 1.0;
    
}
100%{
    opacity:0;
}
`


export const RedTransition = styled.div`
height: 86px;
width: 100vw;

z-index: -1;

position:fixed;
top: 0;



background-color: #ED3237;
animation-name: ${animationTop};
border-bottom: 5px solid black;
animation-duration: 3s;

`
export const FakeHeader = styled.div `
height: 86px;


`

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #ED3237;
padding: 0 15px;
width: 97.5vw;
height: 86px;
border-bottom: 5px solid black;
position: fixed;
top: 0px;
left: 0;



img{
    width: 60px;
}
button{
    font-size: medium;
    border-radius: 10px;
    width: 140px;
    height: 50px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: all 0.5s;

    :hover{
        background-color: lightgrey;
        transform: scale(1.1);
        
    }

}
h1{
    text-transform: capitalize
}
`