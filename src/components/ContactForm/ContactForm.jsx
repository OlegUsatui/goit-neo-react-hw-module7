import {Formik} from 'formik';
import styles from './ContactForm.module.css';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsOps.js";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    number: Yup.string()
        .matches(/^[0-9\-]+$/, 'Phone number is not valid')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone number is required')
});

const ContactForm = () => {

    const dispatch = useDispatch();

    const dispatchContact = (contact) => dispatch(addContact(contact));

    return <div className={styles.formContainer}>
        <Formik
            initialValues={{name: '', number: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                dispatchContact(values);
                resetForm();
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={styles.input}
                        />
                        {errors.name && touched.name && (
                            <div className={styles.error}>{errors.name}</div>
                        )}
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="number" className={styles.label}>Number</label>
                        <input
                            type="text"
                            name="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.number}
                            className={styles.input}
                        />
                        {errors.number && touched.number && (
                            <div className={styles.error}>{errors.number}</div>
                        )}
                    </div>
                    <button type="submit" className={styles.button}>
                        Add contact
                    </button>
                </form>
            )}
        </Formik>
    </div>;
};

export default ContactForm;
