import Immutable from 'immutable';
import {List, Map} from 'immutable';

export function greet(name = 'my friend') {
  if(Array.isArray(name)) return handleArray(name);
  if(name === name.toUpperCase()) return 'HELLO ' + name.toUpperCase() + '!';
  return "Hello, " + name + '.';
}

function handleArray(arrayOfNames) {
    let lowerCaseSentence, combinedSentences;
    let nameList = Immutable.fromJS(arrayOfNames);
    let hi = "Hello, ";

    let lowerCaseNames = nameList.filterNot(name => name === name.toUpperCase());
    let upperCaseNames = nameList.filter(name => name === name.toUpperCase());

    let lastIndex = lowerCaseNames.size - 1;
    let addAndToLastName = "and " + lowerCaseNames.get(lastIndex) + ".";
    let lastNameHasAnd = lowerCaseNames.update(lastIndex, name => addAndToLastName);

    if (lastNameHasAnd.size === 2) lowerCaseSentence = hi + lastNameHasAnd.get(0) + " " + lastNameHasAnd.get(1);
    if (lastNameHasAnd.size > 2) lowerCaseSentence = hi + lastNameHasAnd.join(", ");
    if (upperCaseNames.size > 0) {
      return combinedSentences = lowerCaseSentence + " AND HELLO " + upperCaseNames.join(" ") + "!";
    }

    return lowerCaseSentence;
};
