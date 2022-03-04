
import HeaderHome from "../components/header/HeaderHome"
import { Body,FundoAmarelo} from "./styledPage" 
import Footer from "../components/footer/Footer"
import { useContext} from "react"
import { GlobalContext } from "../context/GlobalContext"
import React from "react"
import Card from "../components/card/Card"





const HomePage = () => {
    const {states, setters, requests} = useContext(GlobalContext)

    setters.setNaPokedex(false)
    
    

return(
    <div>
        <HeaderHome/>
        <FundoAmarelo>
            <p>aloalolao</p>
        </FundoAmarelo>
        <Body>
            {states.pokeList &&
            states.pokeList.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} naPokedex={states.naPokedex} />;
            })}
        </Body>
        
        <Footer>
        </Footer>
    </div>
)
}

export default HomePage;