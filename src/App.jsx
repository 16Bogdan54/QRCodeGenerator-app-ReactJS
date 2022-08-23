import { Navbar } from "./components/navbar/Navbar";
import { Form } from "./components/form/Form";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#202121]">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
