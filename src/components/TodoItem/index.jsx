import React from 'react';

function TodoItem(props) {
  const {
    item: {
      id,
      name,
      status,
    },
    onChange,
    onRemove,
  } = props;

  function handleOnChange(e) {
    const {
      target: {
        checked,
        type,
        value: name,
      },
    } = e;
    const isCheckbox = type === 'checkbox';

    onChange({ 
      id,
      name,
      status: isCheckbox ? checked : status,
    });
  }

  return (
    <div className="cardTodo">
      <input
        checked={status}
        onChange={handleOnChange}
        type="checkbox"
        value={name}
      />
      <input
        id={id}
        onChange={handleOnChange}
        type="text"
        value={name}
      />
      <div
        className="remove-btn"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}

export default TodoItem;
