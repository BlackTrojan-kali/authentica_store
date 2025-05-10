import { Head, Link, useForm } from "@inertiajs/react"
import AdminLayout from "../Layouts/adminLayout"
import DashHeader from "../components/DashHeader"
import { FaEdit, FaTrash } from "react-icons/fa"

const  adminGest= ({admins})=>{
    const {delete:destroy} = useForm();
    const submit = (idUser)=>{
        destroy(`/admin/delete-admin/${idUser}`)
    }
    return(
        <div>
            <Head>
                <title>Gerer Admin</title>
            </Head>
            <DashHeader/>
            <div className="p-8">
                <div className="card relative">
                    <h1 className="text-center font-bold">List des Administrateurs</h1>
                    <div className="w-full flex justify-end">
                    <Link href="/admin/create-admin" className="font-bold text-white bg-cyan-700 p-4 rounded-md">Creer un admin</Link>
                    </div>
                    <table className="table-admin">
                        <thead>
                            <tr>
                                <th>profile</th>
                                <th>nom</th>
                                <th>role</th>
                                <th>genre</th>
                                <th>email</th>
                                <th>date</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(admins)}
                            {admins.map(admin=>(
                                <tr key={admin.id}>
                                    <td>{admin.profile ? <img className="w-14 h-14 rounded-full" src={import.meta.env.VITE_ADMIN_IMAGE_PATH+ admin.profile}/>:"null"}</td>
                                    <td>{admin.name}</td>
                                    <td>{admin.role}</td>
                                    <td>{admin.gender}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.created_at}</td>
                                    <td className="flex gap-4">
                                        <Link href={`/admin/edit-admin/${admin.id}`}>
                                            <FaEdit className="text-blue-500 text-2xl"/>
                                        </Link>
                                        <form onSubmit={e=>submit(admin.id)}>
                                            <button>    <FaTrash className="text-red-800 text-2xl"/></button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
adminGest.layout  = page => <AdminLayout children={page}/>
export default adminGest