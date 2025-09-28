import type {Character} from "../types.ts"
import styled from "styled-components";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    //background-color: bisque;
    //background-color: #2C2C2C ;
    //background-color: #10162F;
    background-color: #C4B998;
`;

const SingleCharDiv=styled.div<{hogwartsHouse: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=> 
            (props.hogwartsHouse === "Gryffindor" ? '#740001' : 
                props.hogwartsHouse === "Ravenclaw" ? '#0e1a40' : 
                props.hogwartsHouse === "Hufflepuff" ? '#ecb939' :
                props.hogwartsHouse === "Slytherin" ? '#1a472a' : 'aliceblue')};
    color: ${(props)=>
            (props.hogwartsHouse === "Gryffindor" ? '#d3a625' :
                props.hogwartsHouse === "Ravenclaw" ? '#946b2d' :
                props.hogwartsHouse === "Hufflepuff" ? '#372e29' :
                props.hogwartsHouse === "Slytherin" ? '#aaaaaa' : 'black')};
    border: 3px white solid;
    font: bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Characters (props : {data:Character[]}){
    return (
        <AllCharsDiv>
            {
                props.data.map((char)=>
                <SingleCharDiv hogwartsHouse={char.hogwartsHouse} key={char.index}>
                    <h1>-{char.hogwartsHouse}-</h1>
                    <h2>{char.fullName}</h2>
                    <h3>{char.interpretedBy}</h3>
                    <p>Birthdate: {char.birthdate}</p>
                    <img src={char.image} alt={char.nickname}></img>
                </SingleCharDiv>)
            }
        </AllCharsDiv>
    );
}