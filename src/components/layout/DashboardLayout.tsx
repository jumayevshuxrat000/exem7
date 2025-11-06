import { Avatar } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  DollarOutlined,
  SettingOutlined,
  LogoutOutlined,
  IdcardOutlined,
  ReadOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Sun } from "lucide-react";

const mainMenu = [
  { key: "/", icon: <HomeOutlined />, label: "Asosiy" },
  { key: "/managers", icon: <TeamOutlined />, label: "Menagerlar" },
  { key: "/admins", icon: <UserOutlined />, label: "Adminlar" },
  { key: "/teachers", icon: <IdcardOutlined />, label: "Ustozlar" },
  { key: "/students", icon: <ReadOutlined />, label: "Studentlar" },
  { key: "/groups", icon: <ApartmentOutlined />, label: "Guruhlar" },
  { key: "/courses", icon: <BookOutlined />, label: "Kurslar" },
  { key: "/payment", icon: <DollarOutlined />, label: "Payment" },
];
const otherMenu = [
  { key: "/settings", icon: <SettingOutlined />, label: "Sozlamalar" },
  { key: "/profile", icon: <UserOutlined />, label: "Profile" },
  { key: "/logout", icon: <LogoutOutlined />, label: "Chiqish" },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (key: string) => {
    if (key === "/logout") {
      localStorage.clear();
      navigate("/login");
    } else {
      navigate(key);
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      <aside className="flex flex-col w-[260px] h-screen bg-black border-r border-neutral-800 text-white select-none">
        <div className="font-bold text-xl pt-5 pb-1 px-5">Admin CRM</div>
        <div className="text-base font-semibold px-5 mt-3 mb-2">Menu</div>
        <nav className="flex flex-col gap-1 px-2">
          {mainMenu.map((menu) => (
            <button
              key={menu.key}
              onClick={() => handleMenuClick(menu.key)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-base font-medium transition
                ${
                  location.pathname === menu.key
                    ? "border border-white bg-neutral-950"
                    : "border border-transparent hover:bg-neutral-900"
                }`}
            >
              <span className="text-xl">{menu.icon}</span>
              <span>{menu.label}</span>
            </button>
          ))}
        </nav>
        <div className="text-base font-semibold px-5 mt-6 mb-2 text-white/80">
          Boshqalar
        </div>
        <nav className="flex flex-col gap-1 px-2 mb-2">
          {otherMenu.map((menu) => (
            <button
              key={menu.key}
              onClick={() => handleMenuClick(menu.key)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-base font-medium transition
                ${
                  location.pathname === menu.key
                    ? "border border-white bg-neutral-950"
                    : "border border-transparent hover:bg-neutral-900"
                }`}
            >
              <span className="text-xl">{menu.icon}</span>
              <span>{menu.label}</span>
            </button>
          ))}
        </nav>
        <div className="flex-1"></div>
      </aside>
      <div className="flex-1 flex flex-col bg-black min-h-screen">
        <header className="h-14 flex items-center justify-between border-b border-neutral-800 px-7 bg-black sticky top-0 z-10">
          <div className="flex items-center gap-3 text-white text-lg font-semibold">
            {(() => {
              const allMenu = [...mainMenu, ...otherMenu];
              const activeItem = allMenu.find(
                (m) => m.key === location.pathname
              );
              return activeItem ? (
                <>
                  <span className="text-xl">{activeItem.icon}</span>
                  <span>{activeItem.label}</span>
                </>
              ) : (
                <>
                  <HomeOutlined className="text-xl" />
                  <span>Asosiy</span>
                </>
              );
            })()}
          </div>
          <div className="flex items-center gap-4">
            <button
              className=" text-white rounded-lg p-2 text-xl"
              tabIndex={-1}
            >
              <Sun className="text-white" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex flex-col text-right pr-2">
                <span className="font-semibold text-sm text-white leading-none">
                  Davron Raimjonov
                </span>
                <span className="text-xs text-white/70 flex items-center gap-1">
                  <TeamOutlined className="text-base" /> Manager
                </span>
              </div>
              <Avatar
                icon={<UserOutlined />}
                className="bg-neutral-900 text-white"
                size={36}
              />
            </div>
          </div>
        </header>
        <main className="flex-1 bg-black p-6 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
