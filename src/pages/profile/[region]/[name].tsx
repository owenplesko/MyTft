import { GetServerSideProps } from "next";
import MatchCard from "~/components/match/MatchCard";
import ProfileHeader from "~/components/profile/ProfileHeader";
import SummonerSearch from "~/components/common/SummonerSearch";
import { matchesByPuuid } from "~/theCollector/match";
import { summonerByName } from "~/theCollector/summoner";
import { Match } from "~/types/Match";
import { Summoner } from "~/types/Summoner";

interface ProfilePageProps {
    summoner: Summoner;
    matches: Match[];
}

const ProfilePage: React.FC<ProfilePageProps> = ({summoner, matches}) => {
    return (
        <main className="flex min-h-screen flex-col gap-8 items-center bg-zinc-800">
            <div className="flex justify-center p-3 w-full border-b shadow-md border-zinc-900">
                <SummonerSearch/>
            </div>
            <div className="flex flex-col gap-4 w-[1000px]">
                <ProfileHeader summoner={summoner}/>
                <div className="border border-zinc-900"/>
                { matches.map(match => 
                    <MatchCard match={match} focusPuuid={summoner.puuid}/>
                )}
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {region, name} = context.query;
    const summoner = await summonerByName({region: region as string, name: name as string});
    if(!summoner) {
        return {props: {}}
    }
    const matches = await matchesByPuuid({puuid: summoner.puuid, count: 10});

    return {
        props: {
            summoner,
            matches
        }
    }
}

export default ProfilePage;