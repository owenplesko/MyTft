import {Dispatch, SetStateAction, useState} from "react"
import {AiFillCaretDown} from "react-icons/ai"

export interface DropDownOption {key: string, display: string}

interface DropDownProps {
    options: DropDownOption[],
    selected: DropDownOption,
    setSelected: Dispatch<SetStateAction<DropDownOption>>,
    color?: string,
    selectedColor?: string,
    rounded?: string,
    hoverColor?: string
}

const DropDown: React.FC<DropDownProps> = ({options, selected, setSelected, color, selectedColor, rounded, hoverColor}) => {
    const [active, setActive] = useState(false)

    const onSelect = (option: DropDownOption) => {
        setSelected(option)
        setActive(false)
    }

    return (
        <div className="w-[80px] cursor-pointer">
            <div className={`flex items-center p-2 ${color} ${rounded} ${active && "rounded-b-none"}`}
                onClick={() => setActive(!active)}
            >
                <label className="flex-grow cursor-pointer select-none">{selected.display}</label>
                <AiFillCaretDown className={`${active && "rotate-180"}`}/>
            </div>
            {active &&
            <div className="h-0">
                <ul className={`flex flex-col items-stretch shadow-md`}>
                    { options.map((option, index ) =>
                        <li className={`select-none opacity-80 px-2 py-1 flex-grow z-10 hover:opacity-100 
                        ${hoverColor} 
                        ${option.key === selected.key ? selectedColor : color} 
                        ${index === options.length - 1 && `${rounded} rounded-t-none`}`}
                            key={option.key}
                            onClick={() => onSelect(option)}>
                            {option.display}
                        </li>)
                    }
                </ul>
            </div>
            }
        </div>
    );
}

export default DropDown;