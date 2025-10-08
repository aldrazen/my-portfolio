import HomePage from "@/Pages/HomePage";


interface IRoute {
  path: string;
  Component?: React.FC;
}

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    Component: HomePage,
  },
];
