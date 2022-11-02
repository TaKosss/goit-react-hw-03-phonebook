import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import schema from 'validation/validation';
import { FormWrap, Input, Label, Alert, Button } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <FormWrap autoComplete="off">
        <Label htmlFor={nameId}>
          Name <Input type="text" name="name" id={nameId} />
          <Alert name="name" />
        </Label>
        <Label htmlFor={numberId}>
          Number <Input type="tel" name="number" id={numberId} />
          <Alert name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormWrap>
    </Formik>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
