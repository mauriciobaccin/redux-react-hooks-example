const findAndUpdateArray = (array, obj) => array.map(item => item.id === obj.id
  ? obj
  : item
);

const removeFromArray = (array, obj) => {

}

export {
  findAndUpdateArray,
  removeFromArray,
}