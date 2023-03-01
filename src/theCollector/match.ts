import { Match } from "~/types/Match";

export const matchesByPuuid = async ({puuid, count}: {puuid: string, count: number}) => {
    const res = await fetch(`${process.env.THE_COLLECTOR_URL}/matches/${puuid}?count=${count}`)
    if(res.status !== 200)
        return [];
    const matches = await res.json() as Match[]
    return matches
}