import { usePage } from "@inertiajs/react";
import {  FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function DashHeader(){
    const {auth} = usePage().props;
    return(
        <header className="dash-header">
            <div className="p-2">
                <FaEnvelope/>
            </div>
            <div className="flex gap-2 w-3/4">
                <input type="search" name="" id="" className="p-2 border border-gray-200 rounded-md" />
                <FaSearch/>
            </div>
            <div className="p-2">
                <FaBell/>
            </div>
            <div className="p-2">
                <p>
                    salut,
                    <b>
                {auth.user.name}
                </b>
                </p>
            </div>
        </header>
    )
}