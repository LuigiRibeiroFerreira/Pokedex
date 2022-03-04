import HeaderDetails from "../components/header/HeaderDetails";
import styled from "styled-components";
import { Body, ContainerCenterColumn, ContainerDetails, ContainerImage, ContainerLeftColumn, ContainerMoves, ContainerRightColumn, ContainerStats, ContainerTypes, FundoAmarelo } from "./styledPage";
import Footer from "../components/footer/Footer";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import react, {useEffect, useState} from "react";




const DetailsPage = () => {
    const {states, setters, requests} = useContext(GlobalContext)
    const params = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({})



    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then((res) => {

            console.log("deu certo", params.name)

            console.log(res.data)
            setPokemonInfo(res.data);
        
        });
      }, []);

    return(
        <div>
            <HeaderDetails pokemon = {pokemonInfo}/>
            <FundoAmarelo>
            </FundoAmarelo>
            <Body>
                <ContainerDetails>
                    <ContainerLeftColumn>
                        <ContainerImage>
                            <img src={pokemonInfo.sprites && pokemonInfo.sprites.front_default}  />
                        </ContainerImage>

                        <ContainerImage>
                            <img src={pokemonInfo.sprites && pokemonInfo.sprites.back_default}/>
                        </ContainerImage>
                    </ContainerLeftColumn>

                    <ContainerCenterColumn>
                        <ContainerStats>
                            {pokemonInfo.stats &&
                            pokemonInfo.stats.map((stat) => {
                                return (
                                    <p key={stat.stat.name}>
                                    <strong>{stat.stat.name}: </strong>
                                    {stat.base_stat}
                                    </p>
                                );
                            })}
                        </ContainerStats>
                    </ContainerCenterColumn>

                    <ContainerRightColumn>
                        <ContainerTypes>
                            {pokemonInfo.types && pokemonInfo.types.map((type) => {
                                return <p key={type.type.name}><strong>{type.type.name}</strong></p>;
                            })}
                        
                        </ContainerTypes>
                        
                        <ContainerMoves>
                            <h2><strong>Moves</strong></h2>
                            {pokemonInfo.moves &&
                            pokemonInfo.moves.map((move, index) => {
                                return (
                                index < 5 && <p key={move.move.name}>{move.move.name}</p>
                                );
                            })}
                        </ContainerMoves>
                    </ContainerRightColumn>
                </ContainerDetails>
            </Body>
            <Footer></Footer>
        </div>
    )
    
    
}

export default DetailsPage;
