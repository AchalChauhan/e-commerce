import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Routes/Home/HomeComponent";
import Navigation from "./Routes/Navigation/Navigation.component";
import Authentication from "./Routes/Authentication/Authentication.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeComponent />} />
          <Route path="Auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
