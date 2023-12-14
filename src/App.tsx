import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes";
import { ThemeProvider } from "./components/Theme-provider";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
