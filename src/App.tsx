import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import AgentStudio from "./pages/AgentStudio";
import Pricing from "./pages/Pricing";
import Pitch from "./pages/Pitch";
import Docs from "./pages/Docs";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0D0D0D]">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents/:id" element={<AgentStudio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}