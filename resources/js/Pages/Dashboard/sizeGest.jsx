import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader";
import { FaEdit, FaTrash } from "react-icons/fa";
const sizeGest  = ({sizes})=>{
    const  {delete:destroy} = useForm();
    const submit =(idsize)=>{
        destroy(`/admin/delete-size/${idsize}`)
    }
    return(

        <>
            <Head>
                <title>Sizes -gest</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                <div className="card relative">
                    <h1 className="text-center font-bold">List des Tailles</h1>
                    <div className="w-full flex justify-end">
                    <Link href="/admin/create-size" className="font-bold text-white bg-cyan-700 p-4 rounded-md">Creer une Taille</Link>
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
                            {sizes.map(size=>(
                                <tr key={size.id}>
                                    <td>{size.id}</td>
                                    <td>{size.name}</td>
                                    <td>{size.created_at}</td>
                                    <td className="flex gap-4">
                                        <Link href={`/admin/edit-size/${size.id}`}>
                                            <FaEdit className="text-blue-500 text-2xl"/>
                                        </Link>
                                        <form onSubmit={e=>submit(size.id)}>
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
sizeGest.layout = page => <AdminLayout children={page}/>

export default sizeGest;
