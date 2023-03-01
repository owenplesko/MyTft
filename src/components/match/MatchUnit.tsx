import Image from 'next/image'
import { AiFillStar } from "react-icons/ai";
import { Unit } from "~/types/Match";

interface UnitIconProps {
    unit: Unit
}

const UnitIcon: React.FC<UnitIconProps> = ({unit}) => {
    return (
        <div className="relative">
            {/* unit star level */}
            <div className="flex flex-row w-full text-sm justify-center absolute bottom-full">
                {
                    unit.tier === 1 ?   <AiFillStar className="text-zinc-300"/> :
                    unit.tier === 2 ? <><AiFillStar className="text-zinc-300"/> <AiFillStar className="text-zinc-300"/></> :
                    <><AiFillStar className="text-yellow-400"/> <AiFillStar className="text-yellow-400"/> <AiFillStar className="text-yellow-400"/></>
                }
            </div>

            {/* unit image */}
            <Image
                className={`border-2 rounded-md outline ${
                    unit.rarity === 0 ? "border-zinc-400" :
                    unit.rarity === 1 ? "border-emerald-500" :
                    unit.rarity === 2 ? "border-blue-500" :
                    unit.rarity === 4 ? "border-violet-500" :
                                        "border-yellow-500"}`
                }
                src={`/unit/${unit.character_id}.png`}
                width={48} height={48}
                alt={unit.character_id}
            />

            {/* unit items */}
            <div className="flex flex-row w-full justify-center absolute gap-[1px] m-[1px] top-full">
            { unit.itemNames.map(item => 
                <Image
                    className="border border-zinc-900 rounded-sm"
                    src={`/item/${item}.png`}
                    width={16} height={16}
                    alt={item}
                />)
            }
            </div>
        </div>
        
    );
}
export default UnitIcon;