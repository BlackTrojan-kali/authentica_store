import { Head, useForm } from "@inertiajs/react"
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader"
import { FaSave } from "react-icons/fa"

const editWeight = ({weight})=>{
    const {data,setData,put,errors,processing} = useForm({
        unit:weight.unit,
    });
    const hadleSubmit = (e)=>{
        e.preventDefault()
        put(`/admin/edit-weight/${weight.id}`)
    }
    return(
        <div>
            <Head>
                <title>create weight</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                 <div>
                 <h1 className="font-bold text-center text-xl">creer un nouvaux poid</h1>
                <form className="mt-4" onSubmit={hadleSubmit}>
                    <div className="card  w-1/2 m-auto">
                        <div>
                        <label htmlFor="unit">Unite:</label>
                        <input type="text" value={data.unit} onChange={e=>setData("unit",e.target.value)} className="champ"/>
                       {errors && <span className="text-red-500">{errors.unit}</span>}
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
editWeight.layout = page => <AdminLayout children={page}/>
export default editWeight