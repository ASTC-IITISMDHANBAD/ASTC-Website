import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Members from "./pages/Members";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import RecruitmentForm from "./pages/Recruitment"; // ✅ new import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="members" element={<Members />} />
        <Route path="join" element={<Join />} />
        <Route path="contact" element={<Contact />} />
        <Route path="recruitment" element={<RecruitmentForm />} /> {/* ✅ new route */}
      </Route>
    </Routes>
  );
}

export default App;
