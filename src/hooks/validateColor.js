function validateColor(colors, currentColor, values) {
  let errors = {};
  if (colors.every(({ color }) => color !== currentColor) === false) {
    errors.isColorUnique = 'Color must be unique';
  } else if (
    colors.every(({ name }) => name.toLowerCase() !== values.toLowerCase()) ===
    false
  ) {
    errors.isColorNameUnique = 'Color name must be unique';
  } else {
    return errors;
  }
  return errors;
}

export default validateColor;
