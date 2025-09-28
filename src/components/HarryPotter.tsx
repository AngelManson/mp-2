import {useEffect, useState} from "react";
import Characters from "./Characters.tsx";
import {type Character} from "../types.ts";

export default function HarryPotter() {
    // so first value can be anything but next has to be set value name
    const[data, setData] = useState<Character[]>([]);

    useEffect(() => {
        // make it async because we want things to happen simultaneously
        async function fetchData(){
            // await because we are waiting for a few things since it's an async function
            const rawData = await fetch("https://potterapi-fedeperin.vercel.app/en/characters") //put api link in the quotes
            const data : Character[] = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(()=> console.log("Everything is good"))
            .catch((e)=> console.log("This error: "+ e+ "occurred."))
    }, [data.length]);

    return <Characters data={data} />;
}
