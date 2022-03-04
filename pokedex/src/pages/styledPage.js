import styled, {keyframes} from "styled-components";

 const animationBody= keyframes`
0%{
    opacity: 0;
}

60%{
    opacity: 0;
}

100%{
    opacity: 1;
}

`

export  const Body=styled.div `

animation-name: ${animationBody};
animation-duration: 3s;
margin: 0;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
background-color: #fbfb72;

`

export  const FundoAmarelo = styled.div`
height: 100vh;
width: 100vw;
z-index: -1;
background-color: #fbfb72;
position: fixed;
top: 0px;


`
export const ContainerDetails = styled.div`
width: 100vw;
display: flex;
justify-content: space-around;
margin-top: 70px;
font-size: large;
text-transform: capitalize
`

export const ContainerLeftColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const ContainerCenterColumn = styled.div`

`
export  const ContainerRightColumn = styled.div`
`

export  const ContainerImage = styled.div`
width: 120px;
height: 120px;
border: 2px solid black;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 15px;

`

export  const ContainerStats = styled.div`


`
export  const ContainerTypes = styled.div`
display: flex;
justify-content: space-between;
`
export  const ContainerMoves = styled.div`

`