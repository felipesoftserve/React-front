import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TablePage from './pages/TablePage';
import FormPage from './pages/FormPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<TablePage />} />
                    <Route path="table" element={<TablePage />} />
                    <Route path="form" element={<FormPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
