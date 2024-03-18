import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Routes/Home/HomeComponent";
import Navigation from "./Routes/Navigation/Navigation.component";
import SignIn from "./Routes/SignIn/SignIn.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeComponent />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
