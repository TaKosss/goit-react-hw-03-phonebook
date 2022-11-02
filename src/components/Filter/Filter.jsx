import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Label } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  const inputId = nanoid();
  return (
    <Label htmlFor={inputId}>
      Find contact by name{' '}
      <Input
        type="text"
        id={inputId}
        value={filter}
        onChange={onChange}
        name="filter"
      ></Input>
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
