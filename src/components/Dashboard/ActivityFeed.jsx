import { Clock, User, ShoppingCart, CreditCard, Settings, Bell} from "lucide-react";
import React, { act } from "react";

const activities = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "Novo usuário registrado",
    description: "João Silva criou uma conta",
    time: "Há 2 minutos",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    type: "order",
    icon: ShoppingCart,
    title: "Novo pedido recebido",
    description: "Pedido #3847 no valor de R$ 2.399",
    time: "Há 5 minutos",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    title: "Pagamento processado",
    description: "Pagamento de R$ 1.199 concluído",
    time: "Há 12 minutos",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 4,
    type: "system",
    icon: Settings,
    title: "Atualização do sistema",
    description: "Backup do banco de dados concluído",
    time: "Há 1 hora",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    id: 5,
    type: "notification",
    icon: Bell,
    title: "Alerta de estoque baixo",
    description: "O estoque do iPhone 15 Pro está baixo",
    time: "Há 2 horas",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
];

function ActivityFeed() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark-border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white"></h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
          Atividades Recentes do Sistema
          </p>
        </div>
        <button className="text-white hover:text-blue-700 text-sm font-medium">
          Ver Tudo
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            return (
              <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                  {" "}
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                    {activity.description}
                  </p>
                  <div className="flex items-center-safe space-x-1 mt-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
