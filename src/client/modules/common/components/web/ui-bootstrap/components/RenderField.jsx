import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
  let valid = null;
  if (touched && error) {
    valid = false;
  }

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <div>
        <Input {...input} placeholder={label} type={type} valid={valid} />
        {touched && (error && <FormFeedback>{error}</FormFeedback>)}
      </div>
    </FormGroup>
  );
};

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

export default RenderField;
