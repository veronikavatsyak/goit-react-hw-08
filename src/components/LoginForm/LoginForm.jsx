import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login success");
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Login error");
      });
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={s.loginBtn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};
