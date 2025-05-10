import { Head, useForm } from "@inertiajs/react"
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader"
import { FaSave } from "react-icons/fa"

const editCat = ({cat})=>{
    const {data,setData,put,errors,processing} = useForm({
        name:cat.name,
    });
    const hadleSubmit = (e)=>{
        e.preventDefault()
        put(`/admin/edit-cat/${cat.id}`)
    }
    return(
        <div>
            <Head>
                <title>create category</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                 <div>
                 <h1 className="font-bold text-center text-xl">modifier une categorie</h1>
                <form className="mt-4" onSubmit={hadleSubmit}>
                    <div className="card  w-1/2 m-auto">
                        <div>
                        <label htmlFor="name">nom:</label>
                        <input type="text" value={data.name} onChange={e=>setData("name",e.target.value)} className="champ"/>
                       {errors && <span className="text-red-500">{errors.name}</span>}
                        </div>
                      
                    <div className="w-full flex justify-end">
                        <button disabled={processing} className="disabled:bg-gray-400 mt-4 p-2 rounded-md bg-blue-500 text-white w-20 flex gap-2 cursor-pointer"><FaSave className="text-xl"/>Creer</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
editCat.layout = page => <AdminLayout children={page}/>
export default editCat