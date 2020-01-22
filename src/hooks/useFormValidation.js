import React from 'react';
import validateColor from './validateColor';
import validatePaletteName from './validatePaletteName';

function useFormValidation(currentColor, palettes, history, savePalette) {
  const [values, setValues] = React.useState({
    colorName: '',
    paletteName: ''
  });
  const [colors, setColors] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [submittingColor, setSubmittingColor] = React.useState(false);
  const [submittingPalette, setSubmittingPalette] = React.useState(false);

  React.useEffect(() => {
    function addNewColor() {
      setColors([...colors, { color: currentColor, name: values.colorName }]);
    }
    if (submittingColor && Object.keys(errors).length === 0) {
      addNewColor();
      setSubmittingColor(false);
      setValues({
        colorName: ''
      });
    } else if (submittingPalette && Object.keys(errors).length === 0) {
      const newPalette = {
        paletteName: values.paletteName,
        id: values.paletteName.toLowerCase().replace(/ /g, '-'),
        colors
      };
      savePalette(newPalette);
      setSubmittingPalette(false);
      setValues({
        paletteName: ''
      });
      history.push('/');
    } else {
      setSubmittingPalette(false);
      setSubmittingColor(false);
    }
  }, [
    errors,
    submittingColor,
    colors,
    currentColor,
    values,
    submittingPalette,
    savePalette,
    history
  ]);

  function handleChange(e) {
    e.persist();
    setValues({
      [e.target.name]: e.target.value
    });
  }

  const handleColorSubmit = e => {
    e.preventDefault();
    setErrors(colorValidator);
    setSubmittingColor(true);
  };

  const handlePaletteSubmit = e => {
    e.preventDefault();
    setErrors(paletteValidator);
    setSubmittingPalette(true);
    console.log(palettes);
  };

  function colorValidator() {
    let cName = values.colorName;
    let validationErrors = validateColor(colors, currentColor, cName);
    return validationErrors;
  }

  function paletteValidator() {
    let pName = values.paletteName;
    let validationErrors = validatePaletteName(palettes, pName);
    return validationErrors;
  }

  return {
    handleChange,
    handleColorSubmit,
    values,
    errors,
    handlePaletteSubmit,
    colors,
    setColors
  };
}

export default useFormValidation;
