import { RouterProvider } from "react-router-dom";
import Navbar from "./components/common/Navbar.tsx";
import Loadingpage from "@/pages/Loadingpage";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import ItemSearch from "./components/common/ItemSearch.tsx";
import router from "./lib/routes.tsx";

function App() {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const loginResponse = useSelector((state: RootState) => state.login);


  if (loading) {
    return <Loadingpage />;
  }

  return (
    <div className="flex flex-row gap-3 h-screen">
      <Navbar />
      <div className="pt-5 w-full">
        <ItemSearch />
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
