export function greet(name) {
  if(!name) name = 'my friend';
  if(name === name.toUpperCase()) return 'HELLO ' + name.toUpperCase() + '!';
  return 'Hello, ' + name;
}
