
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
        <div className="info-card"><Info /></div>
        <div className="ai-card">
        <div className="about-card"><About /></div>
        <div className="interest-card"><Interest /></div>
        </div>
        <div className="footer-card"><Footer /></div>
    </div>
  );
}

export default App;
