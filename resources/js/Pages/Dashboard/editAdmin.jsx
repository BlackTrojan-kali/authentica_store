import { Head, useForm } from "@inertiajs/react"
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader"
import { FaSave } from "react-icons/fa"

const editAdmin = ({user})=>{
    const {data,setData,post,errors,processing} = useForm({
        name:user.name,
        role:user.role,
        gender:user.gender,
        number:user.number,
        profile:null,
    });
    console.log(data);
    const hadleSubmit = (e)=>{
        e.preventDefault()
        post(`/admin/edit-admin/${user.id}`)
    }
    console.log(errors)
    return(
        <div>
            <Head>
                <title>Edit admin</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                 <div>
                 <h1 className="font-bold text-center text-xl">creer un nouvel administrateur</h1>
                <form className="mt-4" onSubmit={hadleSubmit}>
                    <div className="card grid grid-cols-2 gap-2 w-1/2 m-auto">
                        <div>
                        <label htmlFor="name">nom</label>
                        <input type="text" value={data.name} onChange={e=>setData("name",e.target.value)} className="champ"/>
                       {errors && <span className="text-red-500">{errors.name}</span>}
                        </div>
                        <div>
                            <label htmlFor="role">role</label>
                        <input type="text" value="admin"  className="champ text-gray-400" disabled />
                        {errors && <span className="text-red-500">{errors.role}</span>}
                        </div>
                        <div>
                            <label htmlFor="gender">genre</label>
                            <select  className="champ" value={data.gender} onChange={e=>setData("gender",e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors && <span className="text-red-500">{errors.gender}</span>}
                        </div>
                        <div>
                            <label htmlFor="number">Number</label>
                            <input type="tel" className="champ" value={data.number} onChange={e=>setData("number",e.target.value)}/>
                            {errors && <span className="text-red-500">{errors.number}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-auto mt-4 card w-1/2">
                        <label htmlFor="image"> selectionner une photo de profile</label>
                            <input type="file" className="w-full border border-dashed p-2 border-gray-400"  onChange={e=>setData("profile",e.target.files[0])} />
                            {errors && <span className="text-red-500">{errors.profile}</span>}
                        </div>
                        <div className="m-auto mt-4 card w-1/2">
                           

                    <div className="w-full flex justify-end">
                        <button disabled={processing}  className="disabled:bg-gray-400 mt-4 p-2 rounded-md bg-blue-500 text-white w-20 flex gap-2 cursor-pointer"><FaSave className="text-xl"/>Creer</button>
                    </div>
                        </div>

                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
editAdmin.layout = page => <AdminLayout children={page}/>
export default editAdmin