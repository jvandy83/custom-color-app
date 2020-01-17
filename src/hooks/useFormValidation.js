import React from 'react';

function useFormValidation(validate, currentColor) {
  const [values, setValues] = React.useState('');
  const [colors, setColors] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      addNewColor();
      setIsSubmitting(false);
      setValues('');
    } else {
      // in case of error isSubmitting will still be reset
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, colors]);

  function handleChange(e) {
    e.persist();
    setValues(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate(colors, currentColor, values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  function addNewColor() {
    setColors([...colors, { color: currentColor, name: values }]);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    colors
  };
}

export default useFormValidation;
