import CertificationsPage from "@/Pages/CertificationsPage";
import HomePage from "@/Pages/HomePage";
import ProjectsPage from "@/Pages/ProjectsPage";

interface IRoute {
  path: string;
  Component?: React.FC;
}

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/certifications",
    Component: CertificationsPage,
  },
];
