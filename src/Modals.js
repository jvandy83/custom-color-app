import React from 'react';
import Picker from 'emoji-picker-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/dialog';

const Modals = ({ open, close, handleEmojiSubmit, showEmojiModal }) => {
  const [chosenEmoji, setChosenEmoji] = React.useState(null);

  const handleFinalClick = () => {
    handleEmojiSubmit(chosenEmoji.emoji);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <Dialog
      style={{ display: !showEmojiModal ? 'none' : 'block' }}
      open={open}
      onClose={close}
    >
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
      <Button onClick={handleFinalClick} variant="contained" color="primary">
        Save Emoji
      </Button>
    </Dialog>
  );
};

export default Modals;
