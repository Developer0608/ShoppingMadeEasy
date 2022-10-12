import { Routes, Route} from "react-router-dom";
import Login from "./pages/login";

function App() {
  console.log('IN APP');
  return <>
      <Routes> 
        <Route path="/" element={<Login />} />
     </Routes>
  </>
}

export default App;
