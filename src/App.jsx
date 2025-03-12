import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute ";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user ...</p>
  ) : (
    <Layout>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
