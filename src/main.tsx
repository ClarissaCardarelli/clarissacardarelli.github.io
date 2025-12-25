import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { LanguageProvider } from "./context/LanguageContext";

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
