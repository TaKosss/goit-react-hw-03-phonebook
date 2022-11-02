import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string('Name may contain only letters, apostrophe, dash and spaces.')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'For example Jacob Mercer!'
    )
    .min(2, 'Name is too short!')
    .max(30, 'Name is too long!')
    .required('Please, enter your name!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits'
    )
    .min(9, 'Please use this format 000-00-00')
    .required('Please, enter your phone number!'),
});

export default schema;