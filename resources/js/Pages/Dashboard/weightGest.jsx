import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader";
import { FaEdit, FaTrash } from "react-icons/fa";
const weightGest  = ({weights})=>{
    const  {delete:destroy} = useForm();
    const submit =(idweight)=>{
        destroy(`/admin/delete-weight/${idweight}`)
    }
    return(

        <>
            <Head>
                <title>Poids -gest</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                <div className="card relative">
                    <h1 className="text-center font-bold">List des Poids</h1>
                    <div className="w-full flex justify-end">
                    <Link href="/admin/create-weight" className="font-bold text-white bg-cyan-700 p-4 rounded-md">Creer un Poid</Link>
                    </div>
                    <table className="table-admin">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>unite</th>
                                <th>date</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weights.map(weight=>(
                                <tr key={weight.id}>
                                    <td>{weight.id}</td>
                                    <td>{weight.unit}</td>
                                    <td>{weight.created_at}</td>
                                    <td className="flex gap-4">
                                        <Link href={`/admin/edit-weight/${weight.id}`}>
                                            <FaEdit className="text-blue-500 text-2xl"/>
                                        </Link>
                                        <form onSubmit={e=>submit(weight.id)}>
                                            <button>    <FaTrash className="text-red-800 text-2xl"/></button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )    
}
weightGest.layout = page => <AdminLayout children={page}/>

export default weightGest;
