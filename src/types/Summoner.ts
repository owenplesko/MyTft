import { Region } from "./Region";

export interface Summoner {
    puuid: string;
    region: Region;
    summonerId: string;
    accountId: string;
    displayName: string;
    rawName: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    lastUpdated: number;
    rankLastUpdated: number;
    matchesLastUpdated: number;
}
