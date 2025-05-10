import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader";
import { FaEdit, FaTrash } from "react-icons/fa";
const catGest  = ({categories})=>{
    const  {delete:destroy} = useForm();
    const submit =(idcat)=>{
        destroy(`/admin/delete-cat/${idcat}`)
    }
    return(

        <>
            <Head>
                <title>Categories -gest</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                <div className="card relative">
                    <h1 className="text-center font-bold">List des Categories</h1>
                    <div className="w-full flex justify-end">
                    <Link href="/admin/create-cat" className="font-bold text-white bg-cyan-700 p-4 rounded-md">Creer une categorie</Link>
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
                            {console.log(categories)}
                            {categories.map(cat=>(
                                <tr key={cat.id}>
                                    <td>{cat.id}</td>
                                    <td>{cat.name}</td>
                                    <td>{cat.created_at}</td>
                                    <td className="flex gap-4">
                                        <Link href={`/admin/edit-cat/${cat.id}`}>
                                            <FaEdit className="text-blue-500 text-2xl"/>
                                        </Link>
                                        <form onSubmit={e=>submit(cat.id)}>
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
catGest.layout = page => <AdminLayout children={page}/>

export default catGest;
