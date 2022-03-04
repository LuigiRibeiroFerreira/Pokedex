import { useHistory } from "react-router-dom";
import { Header, RedTransition, FakeHeader} from "./styledHeader";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";




const HeaderDetails = (props) => {
    const history = useHistory ()
    const goBack = () => {
        history.goBack()
    }

    const {states, setters, requests, functions} = useContext(GlobalContext)


    return(
        <div>
        <FakeHeader/>
        <Header>
            <button onClick={goBack}><b>Voltar</b></button>
            <h1>{props.pokemon.name}</h1>
            <button onClick = {()=>functions.moveRemovePokedex(props.pokemon)}><b>Add/Rmv from pokedex</b></button>
            
        </Header>
        <RedTransition></RedTransition>
        </div>
    )
}
export default HeaderDetails;