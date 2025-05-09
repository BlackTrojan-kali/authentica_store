import { Head, useForm, usePage,  } from "@inertiajs/react";
import { useState } from "react";
export default function adminLogin(){
    const {data,setData,post,errors,processing}= useForm({email:"",password:""});
    const {flash,auth} = usePage().props;
    const [flashMsg,setFlashMsg] = useState(flash.message)
    const [ flashErr,setFlashErr] = useState(flash.error)
    const [ flashSuc,setFlashSuc] = useState(flash.success)
setTimeout(() => {
    setFlashErr(null);
    setFlashMsg(null);
    setFlashSuc(null);
}, 3000);
    const handleSubmit = async(e)=>{
        e.preventDefault()
         await post("/auth/admin/login");
        console.log(errors)
    }
    return(
        <>
        <Head>
            <title>admin login</title>
        </Head>
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
        <section className="w-full">
            <div className="warning-message"></div>
            <div className="m-auto font-bold bg-white rounded-lg  border-1 border-gray-300 w-1/3 p-10 mt-32">
                <h1 className="text-center">Connexion Admin</h1>
                <form onSubmit={handleSubmit} className="text-sm">
                <div>
                <label htmlFor="email" className="mt-2">Email:</label>
                <input type="email" value={data.email} onChange={e=>setData("email",e.target.value)} className="champ" placeholder="exemple@gmail.com"/>
                {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div>
                <label htmlFor="password" className="mt-2">Mot de passe:</label>
                <input type="password" value={data.password} onChange={e=>setData("password",e.target.value)} className="champ" placeholder="*********"/>
                {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                <button className="form-submit disabled:bg-gray-500" disabled={processing}>se connecter</button>
                </form>
            </div>
        </section>
        </>
    )
}