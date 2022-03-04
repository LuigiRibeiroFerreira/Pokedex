import HeaderPokedex from "../components/header/HeaderPokedex";
import Card from "../components/card/Card";
import { Body, FundoAmarelo } from "./styledPage" 
import Footer from "../components/footer/Footer";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const PokedexPage = () => {



    const {states, setters, pokedexList} = useContext(GlobalContext)
    setters.setNaPokedex(true)
    return(
        <div>
            <FundoAmarelo>
            </FundoAmarelo>
            <HeaderPokedex/>
            <Body>
            {pokedexList.map((pokemon) => {
                return <Card key={pokemon.name} pokemon={pokemon} naPokedex={states.naPokedex} />;
            })}
            </Body>
            <Footer></Footer>
        </div>
    )
    
    
    
    }
    export default PokedexPage;