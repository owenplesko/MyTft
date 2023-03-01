import Image from 'next/image'
import { Comp, Match} from "~/types/Match";
import UnitIcon from './MatchUnit';
import TraitIcon from '../common/TraitIcon';
import MatchSummary from './MatchSummary';

interface MatchCardProps {
    focusPuuid: string;
    match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({focusPuuid, match}) => {
    let focusComp: Comp | null = null;
    for(const participant of match.Info.participants) {
        if(participant.puuid === focusPuuid) {
            focusComp = participant;
            break;
        }
    }

    if(!focusComp) {
        return (
            <div className="bg-red-400">
                404 summoner focus not found in comp
            </div>
        );
    }

    return (
        <div className="flex flex-row gap-4 border shadow-md border-zinc-900 bg-zinc-700">
            {/* placement indicator */}
            <div className={`w-2 
                ${focusComp.placement === 1 ? "bg-violet-500" :
                focusComp.placement <= 4 ?  "bg-blue-400"   : 
                                          "bg-red-400"}`}
            />

            <MatchSummary match={match} comp={focusComp}/>

            {/* comp traits */}
            <div className="flex items-center">
                <div className="flex flex-row flex-wrap w-[144px] h-min items-center"> 
                {   
                    focusComp.traits.sort((a, b) => b.style - a.style).map(trait => <TraitIcon trait={trait} className={"w-6"}/>)
                }
                </div>
            </div>

            {/* comp augments */}
            <div className="flex flex-col justify-center gap-1">
            { focusComp.augments.map(augment => 
                <Image
                    className="border border-zinc-900 rounded-md"
                    src={`/augment/${augment}.png`}
                    width={24} height={24}
                    alt={augment}
                />)
            }
            </div>
            
            {/* comp units */}
            <div className="flex flex-row gap-2 items-center">
            { focusComp.units.map(unit =>
                <UnitIcon unit={unit}/>
            )}
            </div>
        </div>
    );
}

export default MatchCard
