export function setNumberOfGears(data) {
  return {
    type: 'change-gears',
    data
  };
};

// export function asyncTask(data, dispatch) {
//   fetch('/url', { data }).then((results) => {
//     dispatch(/** ... */)
//   });
// }