export default () => {
  if (localStorage.getItem('access_hash')) {
    var access_hash = JSON.parse(localStorage.getItem('access_hash'))
    var public_key = access_hash.public_key;
    var hash = access_hash.hash;
  }

  return {
    public_key,
    hash
  }
}