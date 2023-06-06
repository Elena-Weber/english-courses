import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './components/Home';
import Elementary from './components/Elementary';
import PreIntermediate from './components/PreIntermediate';
import NoPage from './components/NoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="elementary" element={<Elementary />} />
          <Route path="pre-intermediate" element={<PreIntermediate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}