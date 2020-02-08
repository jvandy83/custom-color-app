function validatePaletteName(palettes, value) {
  let errors = {};
  let isUnique = palettes.every(({ paletteName }) => {
    return paletteName.toLowerCase() !== value.toLowerCase();
  });
  if (!isUnique) {
    errors.isPaletteNameUnique = 'Name already used';
  }
  return errors;
}

export default validatePaletteName;
