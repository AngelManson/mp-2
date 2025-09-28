import type {Character} from "../types.ts"
import styled from "styled-components";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: aliceblue;
    color: black;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Characters (props : {data:Character[]}){
    return (
        <AllCharsDiv>
            {
                props.data.map((char)=>
                <SingleCharDiv key={char._id}>
                    <h3>{char.name}</h3>
                    <p>{char.films}</p>
                    <img src={char.imageUrl} alt={char.name}></img>
                </SingleCharDiv>)
            }
        </AllCharsDiv>
    );
}