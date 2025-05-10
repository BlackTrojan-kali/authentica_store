import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader";
import { FaEdit, FaTrash } from "react-icons/fa";
const colorGest  = ({colors})=>{
    const  {delete:destroy} = useForm();
    const submit =(color)=>{
        destroy(`/admin/delete-color/${color}`)
    }
    return(

        <>
            <Head>
                <title>Color -gest</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                <div className="card relative">
                    <h1 className="text-center font-bold">List des Couleurs</h1>
                    <div className="w-full flex justify-end">
                    <Link href="/admin/create-color" className="font-bold text-white bg-cyan-700 p-4 rounded-md">Creer une Couleur</Link>
                    </div>
                    <table className="table-admin">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nom</th>
                                <th>date</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colors.map(color=>(
                                <tr key={color.id}>
                                    <td>{color.id}</td>
                                    <td>{color.name}</td>
                                    <td>{color.created_at}</td>
                                    <td className="flex gap-4">
                                        <Link href={`/admin/edit-color/${color.id}`}>
                                            <FaEdit className="text-blue-500 text-2xl"/>
                                        </Link>
                                        <form onSubmit={e=>submit(color.id)}>
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
colorGest.layout = page => <AdminLayout children={page}/>

export default colorGest;
