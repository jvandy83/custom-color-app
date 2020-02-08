export const randomColorValidator = (starterPalette, colors) => {
  let colorErrors = {};
  let isColorUnique = null;
  const allPalettes = starterPalette.flatMap(({ colors }) => colors);
  const rand = [Math.floor(Math.random() * allPalettes.length + 1)];
  const randomColor = allPalettes[rand];
  if (colors !== undefined && randomColor !== undefined) {
    isColorUnique = colors.find(c => {
      return c.name === randomColor.name;
    });
  } else {
    colorErrors.isRandomColorUnique = 'Color generation error. Try again.';
  }
  if (isColorUnique) {
    colorErrors.isRandomColorUnique = `Color ${randomColor.name} already used. Try again.`;
  }
  return {
    colorErrors,
    randomColor
  };
};
