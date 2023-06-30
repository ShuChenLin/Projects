import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import "./Style.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="practice" element={<Practice />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;