import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export const PickerModal = ({ handleEmojiSubmit }) => {
  // const [emoji, setEmoji] = React.useState('');

  // const addEmoji = chosenEmoji => {
  //   setEmoji(chosenEmoji);
  //   handleEmojiSubmit(chosenEmoji);
  // };

  const [emoji, setEmoji] = useState('');

  const handleSelect = chosenEmoji => {
    setEmoji(chosenEmoji.native);
  };

  const handleFinalSubmit = () => {
    handleEmojiSubmit(emoji);
  };

  return (
    <div>
      <Picker onSelect={handleSelect} />
      <div>
        <button
          style={{
            width: '100%',
            backgroundColor: 'silver',
            fontSize: '1.5rem',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
          onClick={handleFinalSubmit}
          vaiant="contained"
          color="primary"
        >
          Save Emoji
        </button>
      </div>
    </div>
  );
};
