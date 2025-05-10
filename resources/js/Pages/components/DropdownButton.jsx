import { Link } from "@inertiajs/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function DropdownButton({title,options}){
    const [isOpen,setIsOpen] = useState(false);

    const clicked = (e)=>{
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    return(
        <div className="dropdown">
            <button className="dropdown-button" onClick={clicked}>{title} {isOpen ? <FaChevronUp className="mt-[3px]"/>:<FaChevronDown className="mt-[6px]"/>}</button>
            
                {isOpen && 
                <ul className="dropdown-list">
                    {options.map(option=>(
                       <Link key={option.title} href={option.url}> <li className="dropdown-item">{option.title}</li>
                    </Link>
                    ))}
                </ul> }
        </div>
    )

}