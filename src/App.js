import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";
import Service from "./pages/Service"
import Contact from "./pages/Contact"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}>
      </Route>

      <Route
        path="/about"
        element={<About />}>

      </Route>

      <Route
        path="/service"
        element={<Service />}>
      </Route>

      <Route
        path="/contact"
        element={<Contact />}>
      </Route>
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
