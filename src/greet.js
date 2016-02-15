export function greet(name) {
  if(Array.isArray(name)) {
    return handleArray(name);
  }
  if(!name) name = 'my friend';
  if(name === name.toUpperCase()) return 'HELLO ' + name.toUpperCase() + '!';
  return "Hello, " + name + '.';
}

function handleArray(arrayOfNames) {
    let hi = "Hello, ";
    
    if (arrayOfNames.length === 2) return hi + arrayOfNames[0] + " and " + arrayOfNames[1] + ".";
    arrayOfNames.forEach(function(name, index) {
      if (index + 1 === arrayOfNames.length) return hi += "and " + name + ".";
      hi += (name + ", ")
    });
    return hi;
};
