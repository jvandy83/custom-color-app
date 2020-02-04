import React from 'react';
import validateColor from './validateColor';
import validatePaletteName from './validatePaletteName';

function useFormValidation(currentColor, palettes, history, savePalette) {
  const [values, setValues] = React.useState({
    colorName: '',
    paletteName: ''
  });
  const [colors, setColors] = React.useState(palettes[0].colors);
  const [errors, setErrors] = React.useState({});
  const [submittingColor, setSubmittingColor] = React.useState(false);
  const [submittingPalette, setSubmittingPalette] = React.useState(false);
  const [emoji, setEmoji] = React.useState('');
  const [submittingEmoji, setSubmittingEmoji] = React.useState(false);

  React.useEffect(() => {
    function addNewColor() {
      setColors([...colors, { color: currentColor, name: values.colorName }]);
    }
    if (submittingColor && Object.keys(errors).length === 0) {
      return () => {
        addNewColor();
        setValues({
          colorName: ''
        });
        setSubmittingColor(false);
      };
    } else if (
      submittingPalette &&
      submittingEmoji &&
      Object.keys(errors).length === 0
    ) {
      const newPalette = {
        paletteName: values.paletteName,
        id: values.paletteName.toLowerCase().replace(/ /g, '-'),
        colors,
        emoji
      };
      savePalette(newPalette);
      setValues({
        paletteName: ''
      });
      setSubmittingPalette(false);
      setSubmittingEmoji(false);
      history.push('/');
    }
  }, [
    errors,
    submittingColor,
    colors,
    currentColor,
    values,
    submittingPalette,
    submittingEmoji,
    savePalette,
    history,
    emoji
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
    console.log(errors);
    setSubmittingColor(true);
  };

  const handlePaletteSubmit = event => {
    event.preventDefault();
    setErrors(paletteValidator);
    setSubmittingPalette(true);
  };

  const handleEmojiSubmit = emojiString => {
    setSubmittingPalette(true);
    setSubmittingEmoji(true);
    setEmoji(emojiString);
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
    handleEmojiSubmit,
    handlePaletteSubmit,
    submittingEmoji,
    submittingPalette,
    values,
    errors,
    colors,
    setColors
  };
}

export default useFormValidation;
