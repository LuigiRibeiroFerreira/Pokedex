import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GlobalState from "../../context/GlobalState";
import { GlobalContext } from "../../context/GlobalContext";
import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import { ContainerButtons, ContainerCard } from "./styledCard";





  

const Card = (props) => {
    const history = useHistory ()
    const goToDetails = (name) => {
        history.push(`/details/${name}`)
    }
    const [pokemonInfo, setPokemonInfo] = useState({})
    const {states, setters, requests, functions} = useContext(GlobalContext)
    
        useEffect(() => {
            
          axios.get(props.pokemon && props.pokemon .url ?  props.pokemon.url : "").then((res) => {
            
        
            
            setPokemonInfo(res.data);
          });
        }, []);
        
        
    const renderizaCard = () =>
    {
        switch(props.naPokedex)
        {   case true:
                return <ContainerCard>
                
                <p><strong>{props.pokemon.name}</strong></p>
                
                <img src = {props.pokemon.sprites && props.pokemon.sprites.front_default}/>
                <ContainerButtons>
                    <button onClick = {() => functions.removeFromPokedex(props.pokemon)}><strong>Remove</strong></button>
                    <button onClick = {() => goToDetails(props.pokemon.name)}><strong>Details</strong></button>
                </ContainerButtons>
                </ContainerCard>

            case false:
                return <ContainerCard>
                
                <p><strong>{props.pokemon.name}</strong></p>
                
                <img src = {pokemonInfo.sprites && pokemonInfo.sprites.front_default}/>
                <ContainerButtons>
                    <button onClick= {()=> functions.moveToPokedex(pokemonInfo)}><strong>Add</strong></button>
                    <button onClick = {() => goToDetails(pokemonInfo.name)}><strong>Details</strong></button>
                </ContainerButtons>
            </ContainerCard>
        }
    }

    
        
    
    return(
        <div>
            {renderizaCard()}
        </div>
    )
}


export default Card;