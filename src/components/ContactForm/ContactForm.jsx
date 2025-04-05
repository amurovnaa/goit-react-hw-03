import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const id = nanoid();
  const nameId = useId();
  const phoneId = useId();
  const initialValues = { id: [id], name: "", number: "" };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="name" name="name" id={nameId} placeholder="Enter name" />
        <label htmlFor={phoneId}>Number</label>
        <Field
          type="number"
          name="number"
          id={phoneId}
          placeholder="Enter phone"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
