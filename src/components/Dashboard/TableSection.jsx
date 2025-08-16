import { MoreHorizontal } from "lucide-react";
import React from "react";

function TableSection() {

    const recentOrders = [
        {
          id: "#3847",
          cliente: "João Silva",
          produto: "MacBook Pro 16\"",
          valor: "R$ 11.999",
          status: "Concluído",
          data: "2024-01-15",
        },
        {
          id: "#3846",
          cliente: "Sara Souza",
          produto: "iPhone 15 Pro",
          valor: "R$ 5.999",
          status: "Pendente",
          data: "2024-01-15",
        },
        {
            "id": "#3849",
            "cliente": "Miguel Oliveira",
            "produto": "AirPods Pro",
            "valor": "R$ 1.199",
            "status": "Concluído",
            "data": "2024-01-14"
          },
          {
            "id": "#3850",
            "cliente": "Emília Costa",
            "produto": "iPad Air",
            "valor": "R$ 3.199",
            "status": "Cancelado",
            "data": "2024-01-14"
          }
        ];

      
  
    const getStatusColor = (status) => {
        switch (status) {
            case 'concluído':
              return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
            case 'pendente':
              return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'cancelado':
              return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default:
              return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
          }
    };

  return (
    <div className="space-y-6">
      {/* Recent Order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white"></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {" "}
                Últimos pedidos de clientes
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Ver todos os pedidos
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  ID do pedido
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  Cliente
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  Produto
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  Valor
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  {" "}
                  Data
                </th>
              </tr>
              </thead>
              <tbody>
                   {recentOrders.map((order, index) => {
                    return (
                      <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4" key={index}>
                          <span className="text-sm font-medium text-white">
                            {order.id}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-slate-800 dark:text-white">
                            {order.cliente}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-slate-800 dark:text-white">
                            {order.produto}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-slate-800 dark:text-white">
                            {order.valor}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                              order.status
                            )}`}
                          >
                            {order.data}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-slate-800 dark:text-white">
                            <MoreHorizontal className="w-4 h-4" />
                          </span>
                        </td>
                      </tr>
                    );
                   })}
              </tbody>
          </table>
        </div>
      </div>
           {/*  top producats */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
      <div className=" flex items-center justify-between">
        <div className="text-lg font-bold text-slate-800 dark:text-white">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Top Produtos
            </h3>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
        produtos com melhor desempenho
        </p>
      </div>
      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">Ver todos
      </button>
      </div>
      {/* Dynamic Data */}
      <div className="">

      </div>
      </div>
    </div>
  );
}

export default TableSection;
