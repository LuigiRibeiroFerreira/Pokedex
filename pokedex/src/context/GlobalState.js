import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) =>
{   // declarar os states, setters e os requests

    
    const [pokeList, setPokeList] = useState([]);
    const [pokedexList, setPokedexList] = useState([]);
    const [naPokedex, setNaPokedex] = useState(false)


    const moveToPokedex = (pokemonToAdd) => {
        const position = pokedexList.findIndex((item) => {
          return item.id === pokemonToAdd.id;
        });
    
        const newPokedexList = [...pokedexList];
    
        if (position === -1) {
            newPokedexList.push({ ...pokemonToAdd});
            alert("You added " + pokemonToAdd.name+ " to your pokedex!")
            
            
        } else {
            alert("You already added this pokemon!")

        }
    
        setPokedexList(newPokedexList);
    };

    const moveRemovePokedex = (pokemonToAdd) => {
        const position = pokedexList.findIndex((item) => {
          return item.id === pokemonToAdd.id;
        });
    
        let newPokedexList = [...pokedexList];
    
        if (position === -1) {
            newPokedexList.push({ ...pokemonToAdd});
            alert("You added " + pokemonToAdd.name+ " to your pokedex!")
            
            
        } else {
            
            
            
            alert("You removed "+pokemonToAdd.name+" from your pokedex!" )
                newPokedexList.splice(position, 1);
                
                
            
            
            
            
        }
    
        setPokedexList(newPokedexList);
    };


    const removeFromPokedex = (pokemon) => {
        
        
        const position = pokedexList.findIndex((item) => {
            return item.name === pokemon.name;
          });
          
        let newPokedexList = [...pokedexList];
        
        
            newPokedexList.splice(position, 1);
            
            
          setPokedexList(newPokedexList);
        
        console.log("lista nova atualizada", newPokedexList)
    }

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((res) => {
            setPokeList(res.data.results);
            
            
        }).catch((err) => {
            console.log(err)
        })
        
      }, []);

    const states= {pokeList,pokedexList,naPokedex}
    const setters={setPokeList,setNaPokedex}
    const requests={} 
    const functions={moveToPokedex,removeFromPokedex,moveRemovePokedex}

    
    return(
        <GlobalContext.Provider value={{states, setters, requests, functions, pokedexList}}>
            {props.children}
        </GlobalContext.Provider>
    )
        
    
    

    
    
}

export default GlobalState;