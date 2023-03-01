import { Trait } from "~/types/Match";
import Set8_Ace            from "../../../public/trait/Set8_Ace.svg"; 
import Set8_Brawler        from "../../../public/trait/Set8_Brawler.svg"; 
import Set8_Defender       from "../../../public/trait/Set8_Defender.svg"; 
import Set8_Hacker         from "../../../public/trait/Set8_Hacker.svg"; 
import Set8_Recon          from "../../../public/trait/Set8_Recon.svg"; 
import Set8_Threat         from "../../../public/trait/Set8_Threat.svg";
import Set8_Admin          from "../../../public/trait/Set8_Admin.svg"; 
import Set8_Channeler      from "../../../public/trait/Set8_Channeler.svg"; 
import Set8_Duelist        from "../../../public/trait/Set8_Duelist.svg"; 
import Set8_Heart          from "../../../public/trait/Set8_Heart.svg"; 
import Set8_Renegade       from "../../../public/trait/Set8_Renegade.svg"; 
import Set8_UndergroundThe from "../../../public/trait/Set8_UndergroundThe.svg";
import Set8_Aegis          from "../../../public/trait/Set8_Aegis.svg";
import Set8_Civilian       from "../../../public/trait/Set8_Civilian.svg";
import Set8_ExoPrime       from "../../../public/trait/Set8_ExoPrime.svg";
import Set8_Mascot         from "../../../public/trait/Set8_Mascot.svg";
import Set8_SpaceCorps     from "../../../public/trait/Set8_SpaceCorps.svg";
import Set8_AnimaSquad     from "../../../public/trait/Set8_AnimaSquad.svg";
import Set8_Corrupted      from "../../../public/trait/Set8_Corrupted.svg";
import Set8_Forecaster     from "../../../public/trait/Set8_Forecaster.svg";
import Set8_OxForce        from "../../../public/trait/Set8_OxForce.svg";
import Set8_StarGuardian   from "../../../public/trait/Set8_StarGuardian.svg";
import Set8_Arsenal        from "../../../public/trait/Set8_Arsenal.svg";
import Set8_Deadeye        from "../../../public/trait/Set8_Deadeye.svg";
import Set8_GenAE          from "../../../public/trait/Set8_GenAE.svg";
import Set8_Prankster      from "../../../public/trait/Set8_Prankster.svg";
import Set8_Supers         from "../../../public/trait/Set8_Supers.svg";

const iconMap = new Map<string, (className: string) => JSX.Element>([
    ["Set8_Ace", (className: string): JSX.Element => <Set8_Ace className={className}/>],
    ["Set8_Brawler", (className: string): JSX.Element => <Set8_Brawler className={className}/>],
    ["Set8_Defender", (className: string): JSX.Element => <Set8_Defender className={className}/>],
    ["Set8_Hacker", (className: string): JSX.Element => <Set8_Hacker className={className}/>],
    ["Set8_Recon", (className: string): JSX.Element => <Set8_Recon className={className}/>],
    ["Set8_Threat", (className: string): JSX.Element => <Set8_Threat className={className}/>],
    ["Set8_Admin", (className: string): JSX.Element => <Set8_Admin className={className}/>],
    ["Set8_Channeler", (className: string): JSX.Element => <Set8_Channeler className={className}/>],
    ["Set8_Duelist", (className: string): JSX.Element => <Set8_Duelist className={className}/>],
    ["Set8_Heart", (className: string): JSX.Element => <Set8_Heart className={className}/>],
    ["Set8_Renegade", (className: string): JSX.Element => <Set8_Renegade className={className}/>],
    ["Set8_UndergroundThe", (className: string): JSX.Element => <Set8_UndergroundThe className={className}/>],
    ["Set8_Aegis", (className: string): JSX.Element => <Set8_Aegis className={className}/>],
    ["Set8_Civilian", (className: string): JSX.Element => <Set8_Civilian className={className}/>],
    ["Set8_ExoPrime", (className: string): JSX.Element => <Set8_ExoPrime className={className}/>],
    ["Set8_Mascot", (className: string): JSX.Element => <Set8_Mascot className={className}/>],
    ["Set8_SpaceCorps", (className: string): JSX.Element => <Set8_SpaceCorps className={className}/>],
    ["Set8_AnimaSquad", (className: string): JSX.Element => <Set8_AnimaSquad className={className}/>],
    ["Set8_Corrupted", (className: string): JSX.Element => <Set8_Corrupted className={className}/>],
    ["Set8_Forecaster", (className: string): JSX.Element => <Set8_Forecaster className={className}/>],
    ["Set8_OxForce", (className: string): JSX.Element => <Set8_OxForce className={className}/>],
    ["Set8_StarGuardian", (className: string): JSX.Element => <Set8_StarGuardian className={className}/>],
    ["Set8_Arsenal", (className: string): JSX.Element => <Set8_Arsenal className={className}/>],
    ["Set8_Deadeye", (className: string): JSX.Element => <Set8_Deadeye className={className}/>],
    ["Set8_GenAE", (className: string): JSX.Element => <Set8_GenAE className={className}/>],
    ["Set8_Prankster", (className: string): JSX.Element => <Set8_Prankster className={className}/>],
    ["Set8_Supers", (className: string): JSX.Element => <Set8_Supers className={className}/>],
]);

interface TraitProps {
    trait: Trait,
    className: string
}

const TraitIcon: React.FC<TraitProps> = ({trait, className}) => {
    const icon = iconMap.get(trait.name)
    if(!icon || (trait.style == 0 && trait.name !== "Set8_Threat")) {
        return null;
    }
    return icon(`${
        trait.name  == "Set8_Threat" ? "text-violet-500" :
        trait.style == 1 ? "text-yellow-700" :
        trait.style == 2 ? "text-zinc-300"   :
        trait.style == 3 ? "text-yellow-500" :
                           "text-purple-300"
    } ${className}`);
}

export default TraitIcon;
