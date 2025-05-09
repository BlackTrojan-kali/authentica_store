import { FaArrowRight, FaDollarSign, FaShoppingCart, FaStore, FaUsers } from "react-icons/fa";
import DashHeader from "../components/DashHeader";
import AdminLayout from "../Layouts/adminLayout";
import { Head } from "@inertiajs/react";
const Index = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashHeader/>
      <section className="flex gap-10 p-8">
        <div>
          <div className="grid grid-cols-2 gap-6">
              <div className="card flex gap-4">
                <div>
                  <FaUsers className="w-10 h-auto text-cyan-600"/>
                </div>
                <div className="text-sm font-bold">
                  <h3 className="text-gray-400">Nouvelles incriptions</h3>
                  <span className="text-cyan-600">19</span>
                </div>
                <div className="p-4 ml-4">
                  <FaArrowRight/>
                </div>
              </div>
              <div className="card flex gap-4">
                <div>
                  <FaDollarSign className="w-10 h-auto text-cyan-600"/>
                </div>
                <div className="text-sm font-bold">
                  <h3 className="text-gray-400">Chiffre d'affaire</h3>
                  <span className="text-cyan-600">19500 XAF</span>
                </div>
                <div className="p-4 ml-4">
                  <FaArrowRight/>
                </div>
              </div>
              <div className="card flex gap-4">
                <div>
                  <FaStore className="w-10 h-auto text-cyan-600"/>
                </div>
                <div className="text-sm font-bold">
                  <h3 className="text-gray-400">Inventaire</h3>
                  <span className="text-cyan-600">1900</span>
                </div>
                <div className="p-4 ml-4">
                  <FaArrowRight/>
                </div>
              </div>
              <div className="card flex gap-4">
                <div>
                  <FaShoppingCart className="w-10 h-auto text-cyan-600"/>
                </div>
                <div className="text-sm font-bold">
                  <h3 className="text-gray-400">Nouvelles Commandes</h3>
                  <span className="text-cyan-600">20</span>
                </div>
                <div className="p-4 ml-4">
                  <FaArrowRight/>
                </div>
              </div>
          </div>
          <div className="card mt-8">
            <h1 className="font-bold">Top Ventes</h1>
          </div>
        </div>
        <div className="w-1/3">
    <div className="card">

    </div>
    <div className="card mt-4">

    </div>
        </div>
      </section>
    </div>
    );
}
Index.layout = page => <AdminLayout children={page}/>
export default Index;
