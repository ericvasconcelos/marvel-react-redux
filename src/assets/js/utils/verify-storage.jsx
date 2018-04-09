export default () => {
  if (!localStorage.getItem('accessHash')) {
    return false;
  }

  const {
    publicKey,
    hash,
  } = JSON.parse(localStorage.getItem('accessHash'));

  return {
    publicKey,
    hash,
  };
};
