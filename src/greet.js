import Immutable from 'immutable';
import {List, Map} from 'immutable';

export function greet(name = 'my friend') {
  if(Array.isArray(name)) return handleArray(name);
  if(name === name.toUpperCase()) return 'HELLO ' + name.toUpperCase() + '!';
  return "Hello, " + name + '.';
}

function handleArray(arrayOfNames) {
    let nameList = Immutable.fromJS(arrayOfNames);
    let greetingText = "Hello, ";

    let lowerCaseNames = nameList.filterNot(name => name === name.toUpperCase());
    let upperCaseNames = nameList.filter(name => name === name.toUpperCase());

    let lowerCaseList = prepareLowerCaseNames(lowerCaseNames);

    if (lowerCaseList.size === 2) greetingText += lowerCaseList.get(0) + " " + lowerCaseList.get(1);
    if (lowerCaseList.size > 2) greetingText += lowerCaseList.join(", ");
    if (upperCaseNames.size > 0) {
      return greetingText += " AND HELLO " + upperCaseNames.join(" ") + "!";
    }

    return greetingText;
};

function prepareLowerCaseNames(lowerCaseNameList) {
  let lowerCaseNames = lowerCaseNameList;

  lowerCaseNames.map((name, index) => {
    if (name.match(/[/"]/)) {
      let removeFirstQuote = name.replace('"', "");
      let removeSecondQuote = removeFirstQuote.replace('"', "");
      lowerCaseNames = lowerCaseNames.set(index, removeSecondQuote);
    }
    if (name.match(/,/) && !name.match(/[/"]/)) {
      let namesSplit = Immutable.fromJS(name.split(', '));
      lowerCaseNames = lowerCaseNames.set(index, namesSplit);
    }
  });
  lowerCaseNames = lowerCaseNames.flatten();

  let lastIndex = lowerCaseNames.size - 1;
  let addAndToLastName = "and " + lowerCaseNames.get(lastIndex) + ".";

  return lowerCaseNames.update(lastIndex, name => addAndToLastName);
}
