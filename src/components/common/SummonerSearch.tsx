import { useRouter } from 'next/router';
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { regionDisplayValues, Region } from '~/types/Region';
import DropDown, { DropDownOption } from './DropDown';

const regionOptions: DropDownOption[] = Object.keys(regionDisplayValues).map((key) => {
    return { key: key, display: regionDisplayValues[key as Region] };
});

const SummonerSearch: React.FC = () => {
    const router = useRouter()
    const [region, setRegion] = useState(regionOptions[0] as DropDownOption);
    const [summoner, setSummoner] = useState("")

    const onSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if(!summoner)
            return
        router.push(`/profile/${region.key}/${summoner}`)
    }

    return (
        <form className="flex flex-row items-stretch border border-zinc-900 rounded-md shadow-sm w-[500px] bg-zinc-700 text-zinc-300" onSubmit={onSearch}>
            <DropDown 
                options={regionOptions}
                selected={region}
                setSelected={setRegion}
                color={"bg-zinc-700"}
                selectedColor={"bg-violet-500"}
                rounded={"rounded-md"}
                hoverColor={"hover:bg-violet-500"}
            />
            <input
                type="text"
                spellCheck="false"
                className="px-2 flex-grow bg-transparent outline-none placeholder-zinc-400"
                placeholder="Summoner Name..."
                onChange={(e) => setSummoner(e.target.value)}
            />
            <button type="submit" className="px-2 text-zinc-300 hover:text-zinc-400">
                <AiOutlineSearch size={24}/>
            </button>
        </form>
    );
};

export default SummonerSearch;