import { usePage } from "@inertiajs/react";
import {  FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function DashHeader(){
    const {auth} = usePage().props;
    return(
        <header className="dash-header">
            <div className="p-2 mt-5">
                <FaEnvelope/>
            </div>
            <div className="flex gap-2 w-3/4 mt-4">
                <input type="search" name="" id="" className="p-1 h-12 border border-gray-200 rounded-md" />
                <FaSearch/>
            </div>
            <div className="p-2 mt-5">
                <FaBell/>
            </div>
            <div className="p-2 flex gap-2">
                <p className="mt-5">
                    salut,
                    <b>
                {auth.user.name}
                </b>
                </p>
                <div>
                {auth.user.profile ?
                    <img className="w-14 h-14 rounded-full" src={import.meta.env.VITE_ADMIN_IMAGE_PATH+auth.user.profile}/>:
                    ""    
                    }
                </div>
            </div>
        </header>
    )
}