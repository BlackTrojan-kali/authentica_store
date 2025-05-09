import { Link, useForm, usePage } from "@inertiajs/react"
import { useState } from "react";
import { FaDashcube, FaObjectGroup, FaUserAlt } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

export default function AdminLayout({children}){
    const {auth,flash} = usePage().props
    const {post} = useForm();
    const logout= ()=>{
        post("/admin/logout");
    } 
    const [flashMsg,setFlashMsg] = useState(flash.message)
        const [ flashErr,setFlashErr] = useState(flash.error)
        const [ flashSuc,setFlashSuc] = useState(flash.success)
    setTimeout(() => {
        setFlashErr(null);
        setFlashMsg(null);
        setFlashSuc(null);
    }, 3000);
    return(
        <main>
        <div className="toasts">
        {
            flashMsg &&
        <span className="message warning">{flashMsg}</span>}
        {
            flashErr &&
        <span className="message error">{flashErr}</span>}{
            flashSuc &&
        <span className="message success">{flashSuc}</span>}
        </div>
            <aside className="sidebar">
                <div className="flex gap-8"><img src="/images/logo-trans.png" className="w-14"></img> <h1 className="mt-3 font-bold">Dashboard</h1></div>
                <div className="px-4 py-2 flex gap-8">
                    <div>
                        {auth.user.profile ?
                    <img className="w-14 h-14 rounded-full" src={import.meta.env.VITE_ADMIN_IMAGE_PATH+auth.user.profile}/>:
                    ""    
                    }
                    </div>
                    <div >
                        <p className="font-bold"> {auth.user.name} </p>
                        <span className="text-gray-400"> {auth.user.role}</span>
                    </div>
                </div>
                <div className="p-3 flex flex-col gap-2">
                    <h2 className="text-gray-400">Navigation</h2>
                    <div className="p-2 flex flex-col gap-6">
                        <div className="flex gap-2">
                            <i><FaDashcube className="text-xl"/></i>
                            <Link href="/admin/dashboard">Dashboard</Link>
                        </div>
                        <div className="flex gap-2">
                            <i><FaObjectGroup className="text-xl"/></i>
                            <Link>Produits</Link>
                        </div>
                        <div className="flex gap-2">
                            <i><FaUserAlt className="text-xl"/></i>
                            <Link>Clients</Link>
                        </div>
                        {auth.user.role == "super" ?
                        <div className="flex gap-2">
                            <i><FaGear className="text-xl"/></i>
                            <Link href="/admin/admin-gest">Administrateurs</Link>
                        </div>:""}
                    </div>
                    <div className="mt-2">
                    <form onSubmit={logout}>
                        <button className="text-red-500 font-bold cursor-pointer">Logout</button>
                    </form>
                    </div>
                </div>
            </aside>
        <section className="dashboard-section">
            {children}
        </section>
        </main>
    )
}