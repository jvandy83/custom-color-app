import { useState, useEffect } from 'react';
import { randomColorValidator } from './randomColorValidator';

const useRandomColorValidator = (starterPalette, colors, setColors) => {
  const [submittingRandomColor, setSubmittingRandomColor] = useState(false);

  const { randomColor, colorErrors } = randomColorValidator(
    starterPalette,
    colors
  );

  const validateRandomColor = () => {
    setSubmittingRandomColor(true);
  };

  useEffect(() => {
    if (
      colorErrors &&
      Object.keys(colorErrors).length === 0 &&
      submittingRandomColor
    ) {
      setColors([...colors, randomColor]);
    }
    setSubmittingRandomColor(false);
  }, [colorErrors, submittingRandomColor, setColors, colors, randomColor]);

  return { validateRandomColor, colorErrors };
};

export default useRandomColorValidator;
