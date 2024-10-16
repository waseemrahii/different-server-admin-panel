import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Layout/header/Header.jsx";
import LoginPage from "./components/LoginPage/LoginPage";
import Footer from "./components/Layout/footer/footer.jsx";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./utils/auth";
import AllRoutes from "./Routes.jsx";
import "./App.css";
import Sidebar from "./components/Layout/sidebar/sidebar.jsx";
// Create a client
const queryClient = new QueryClient();

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is authenticated
    checkAuth(dispatch);
  }, [dispatch]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          {isLoggedIn ? (
            <>
              <Header />
              <div className="flex flex-1">
                <div
                  className={`fixed inset-0 z-30 ${
                    isSidebarOpen ? "block" : "hidden"
                  } lg:block lg:relative lg:w-2/12`}
                >
                  <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
                    onClick={toggleSidebar}
                  ></div>
                  <Sidebar />
                </div>
                <main className="flex-1  lg:w-10/12 ml-4 overflow-auto">
                  <button className="p-4 lg:hidden " onClick={toggleSidebar}>
                    {isSidebarOpen ? (
                      "Close"
                    ) : (
                      <RiMenuUnfold3Fill className="text-[1rem] h-6 w-6 mt-5 font-semibold" />
                    )}
                  </button>
                  <AllRoutes />
                  <Footer />
                </main>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

