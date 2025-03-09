import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const onlyLetters = /^[A-Za-z\s]+$/;
  const regForPhone = /^\d{3}-\d{2}-\d{2}$/;

  const ContactSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long")
      .matches(onlyLetters, "Only letters and spaces are allowed"),
    number: Yup.string()
      .required("Required")
      .matches(regForPhone, "Invalid phone number format"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, name: values.username };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={s.formInput}
          type="text"
          name="username"
          id={nameId}
        />
        <ErrorMessage className={s.error} name="username" component="span" />

        <label htmlFor={numberId}>Number</label>
        <Field
          className={s.formInput}
          type="text"
          name="number"
          id={numberId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />

        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
