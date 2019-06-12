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
    const isCheckbox = e.target.type === 'checkbox';

    onChange({ 
      id,
      name: e.target.value,
      status: isCheckbox ? e.target.checked : status,
    });
  }

  return (
    <div className="cardTodo">
      <input
        value={name}
        checked={status}
        type="checkbox"
        onChange={handleOnChange}
      />
      <input
        id={id}
        value={name}
        type="text"
        onChange={handleOnChange}

      />
      <div
        className="remove-btn"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}

export default TodoItem;
