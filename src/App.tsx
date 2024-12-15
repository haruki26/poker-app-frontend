import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
