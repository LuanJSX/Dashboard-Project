import { Zap, BarChart3, Calendar, CreditCard, FileText, LayoutDashboard,MessageSquare, Package, Settings, ShoppingBag, Users, Badge, ChevronDown, ShoppingCart  } from "lucide-react";
import { useState } from "react";



const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    Badge: "Novo",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Análises",
    submenu: [
      { id: "Visão geral", label: "Visão geral" },
      { id: "Relatórios", label: "Relatórios" },
      { id: "Análises aprofundadas", label: "Análises aprofundadas" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Usuários",
    count: "2.4k",
    submenu: [
      { id: "Todos os usuários", label: "Todos os usuários" },
      { id: "Funções e permissões", label: "Funções e permissões"},
      { id: "Atividade dos usuários", label: "Atividade dos usuários"},
    ],
  },
  {
    id: "E-coommerce",
    icon: ShoppingCart,
    label: "E-coommerce",
    submenu: [
      { id: "all-uders", label: "Produtos, pedidos e clientes" },
    
    ],
  },

  { id: "invetory",
    icon: Package,
    label: "Estoque",
    count: "847",
  },
  { id: "transactions",
    icon: CreditCard,
    label: "Transições",
  },
  { id: "messages",
    icon: MessageSquare,
    label: "Mensagens",
    count: "12",
  },
  { id: "calender",
    icon: Calendar,
    label: "Calendário",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Relatórios",
  },
  { id: "settings",
    icon: Settings,
    label: "Configurações"
  },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {

const [expandedItems, setExpendedItems] = useState (new Set(["analytcs"]));

const toggleExpended = (itemid) => {
  const newExpanded = new Set(expandedItems);

  if ( newExpanded.has(itemid)) {
    newExpanded.delete(itemid);
  }else {
    newExpanded.add(itemid);
  }

  setExpendedItems(newExpanded)
};

  return (
    <div className={`${collapsed ? "w-20" : "w-72"} transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl boder-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
      {/* logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {/*  Conditional Rendering */}
          {!collapsed && (
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Juiz de Fora
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Painel
            </p>
          </div>
        )}
        </div>
      </div>
      {/* Navegation I Will Display Dynamic Menus*/}
      <nav className="flex-1 p-4 spece-x-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-20 ${
                  currentPage === item.id || item.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate- dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpended(item.id)
                  }else {
                    onPageChange(item.id)
                  }
                }}
              >
                <div className="flex items-center space-x-3 text-white">
                  <item.icon className={"w-5 h-5"} />

                  {/* conditional rendering */}
                  <>
                    {!collapsed && (
                      <> 

                      <span className="font-medium ml-2">{item.label}</span>

                      
                    {item.Badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white- rounded-full">
                        {item.Badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="px-2 py-1 text-xs dak:text-slate-300">
                        {item.count}
                      </span>
                    )}
                    </>
                    )}

                  </>
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform text-white" />
                )}
              </button>

              {/* {sub Menus} */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-x-1">
                  {item.submenu.map((subitem) => {
                    return <button className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slat-800 dark:hover:text-slate-200 dark:hover:bgslate-800/50 rounded-lg transition-all cursor-pointer">{subitem.label}</button>;
                  })}
              </div>
              )}
            </div>
          );
        })}
      </nav>

      {/*  user profile */}
      {!collapsed && (
         <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
         <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
           <img
             src="src\assets\r.png"
             alt="user"
             className="w-10 h-10 rounded-full ring-2 ring-blue-500"
           />
           <div className="flex-1 min-w-0">
             <div className="flex-1 min-w-0">
               <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                 Luan Batista
               </p>
               <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                 Administrador
               </p>
             </div>
           </div>
         </div>
       </div>
      )}
     
    </div>
  );
}

export default Sidebar