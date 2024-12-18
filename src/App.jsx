import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

import "./App.css";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <div className="bg-accent-900 h-screen">
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AppLayout />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
