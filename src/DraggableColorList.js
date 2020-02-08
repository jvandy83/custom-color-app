import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, removeColorBox }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors &&
        colors.map((c, i) => (
          <DraggableColorBox
            index={i}
            removeColorBox={removeColorBox}
            key={c.name}
            color={c.color}
            name={c.name}
          />
        ))}
    </div>
  );
});

export default DraggableColorList;
