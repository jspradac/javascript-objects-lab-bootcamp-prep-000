var recipes = {mole: "mole and rice"};
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value})
}
