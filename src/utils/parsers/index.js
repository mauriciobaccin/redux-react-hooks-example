const findAndUpdateArray = (array, obj) => array.map(item => item.id === obj.id
  ? obj
  : item
);

const removeFromArray = (array, id) => array.filter(
  ({ id: objId }) => objId !== id,
);

export {
  findAndUpdateArray,
  removeFromArray,
};
