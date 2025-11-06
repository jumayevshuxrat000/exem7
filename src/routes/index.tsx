import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import ManagersPage from "../pages/managers";
import AdminsPage from "../pages/admins";
import TeachersPage from "../pages/teachers";
import StudentsPage from "../pages/students";
import GroupsPage from "../pages/groups";
import CoursesPage from "../pages/courses";
import PaymentPage from "../pages/payment";
import SettingsPage from "../pages/settings";
import ProfilePage from "../pages/profile";
import PrivateRouter from "./private-route";

const protectedRoutes = [
  { index: true, element: <DashboardPage /> },
  { path: "managers", element: <ManagersPage /> },
  { path: "admins", element: <AdminsPage /> },
  { path: "teachers", element: <TeachersPage /> },
  { path: "students", element: <StudentsPage /> },
  { path: "groups", element: <GroupsPage /> },
  { path: "courses", element: <CoursesPage /> },
  { path: "payment", element: <PaymentPage /> },
  { path: "settings", element: <SettingsPage /> },
  { path: "profile", element: <ProfilePage /> },
];

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: protectedRoutes,
  },
]);
