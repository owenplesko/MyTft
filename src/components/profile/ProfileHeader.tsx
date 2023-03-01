import Image from 'next/image'
import { regionDisplayValues } from '~/types/Region';
import { Summoner } from "~/types/Summoner";

interface ProfileHeaderProps {
    summoner: Summoner
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({summoner}) => {
    return (
        <div className="flex flex-row items-center gap-4">
            <Image
            className="border border-zinc-900 rounded-sm shadow-md"
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${summoner.profileIconId}.png`}
            width={128} height={128}
            alt={`profile icon ${summoner.profileIconId}`}
            />
            <div className="flex flex-col items-start gap-4">
                <div className="flex items-center text-zinc-300">
                    <span className="pr-2 mr-2 border-r-2 text-2xl border-zinc-900">{summoner.displayName}</span>
                    <span className='py-0.5 px-1.5 bg-zinc-900 rounded-sm text-zinc-300 text-xs shadow-sm'>{regionDisplayValues[summoner.region]}</span>
                </div>
                <button className="py-1 px-2 border border-zinc-900 rounded-sm shadow-sm bg-violet-500 hover:bg-violet-600 text-zinc-900">
                    Update
                </button>
            </div>
        </div>
    );
}

export default ProfileHeader