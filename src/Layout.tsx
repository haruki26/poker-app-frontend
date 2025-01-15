import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
    return (
        <div className="h-svh m-0 px-2 py-3 bg-gray-500">
            <Outlet />
        </div>
    );
}

export default Layout;
