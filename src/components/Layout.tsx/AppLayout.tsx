import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="animate-fade-in">
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <Outlet />
      </div>
      <footer className="border-t mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Al Drazen Sagarino. All rights reserved.</p>
        
          </div>
        </div>
      </footer>
    </main>
  );
};

export default AppLayout;
