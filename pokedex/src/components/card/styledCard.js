import styled from "styled-components"

export const ContainerCard=styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid black;
width: 250px;
height: 230px;
margin: 16px;
background-color: white;
border-radius: 15px;

margin-left: 40px;
text-transform: capitalize

`

export const ContainerButtons = styled.div`
display: flex;
button{
    color: white;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border-color: black;
    background-color: #ED3237;
    cursor: pointer;
    transition: all 0.5s;
    :hover{
        transform: scale(1.1);
    }
}

`