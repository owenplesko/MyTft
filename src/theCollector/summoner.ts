import { Summoner } from "~/types/Summoner";

export const summonerByName = async ({region, name}: {region: string, name: string}) => {
    const res =  await fetch(`${process.env.THE_COLLECTOR_URL}/summoner/${region}/${name}`)
    if(res.status !== 200)
        return null;
    const summoner: Summoner = await res.json()
    return summoner
}

export const summonerByPuuid = async ({puuid}: {puuid: string}) => {
    const res =  await fetch(`${process.env.THE_COLLECTOR_URL}/summoner/${puuid}`)
    if(res.status !== 200)
        return null;
    const summoner: Summoner = await res.json()
    return summoner
}   
