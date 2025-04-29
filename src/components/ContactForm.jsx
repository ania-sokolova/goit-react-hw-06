import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone format must be 123-45-67")
      .required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="name">Name:</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="number">Number:</label>
            <Field id="number" name="number" type="text" placeholder="123-45-67" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </div>

          <button type="submit" className={styles.submitButton}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
