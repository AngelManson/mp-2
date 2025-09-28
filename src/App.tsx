import Characters from "./components/Characters.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {type Character} from "./types.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App() {
    // so first value can be anything but next has to be set value name
    const[data, setData] = useState<Character[]>([]);

    useEffect(() => {
        // make it async because we want things to happen simulationly
        async function fetchData(){
            // await because we are waiting for a few things since its an async function
            const rawData = await fetch("https://api.disneyapi.dev/character") //put api link in the quotes
            const {data} : {data: Character[]} = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(()=> console.log("Everything is good"))
            .catch((e)=> console.log("This error: "+ e+ "occurred."))
    }, [data.length]);

    return (
        <ParentDiv>
            <Characters data={data}/>
        </ParentDiv>
    )
}
