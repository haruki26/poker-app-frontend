import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/main" element={<MainPage />} />
            </Route>
        </Routes>
    );
};

export default App;
