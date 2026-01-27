import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <footer className="border-t mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Al Drazen Sagarino. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppLayout;