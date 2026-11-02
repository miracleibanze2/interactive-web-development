const sampleNumbers = [
  12, 7, 3, 12, 8, 5, 20, 7, 14, 9, 2, 18, 11, 6, 15, 4, 10, 13, 16, 1,
];

const sampleNames = [
  "Amina",
  "Brian",
  "Chantal",
  "David",
  "Elise",
  "Fabrice",
  "Grace",
  "Hassan",
  "Imani",
  "Jean",
  "Keza",
  "Linda",
  "Mugisha",
  "Nadia",
  "Oscar",
  "Patrick",
  "Queen",
  "Samuel",
  "Teta",
  "Yvonne",
];

function sumNumbers(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function largestNumber(numbers) {
  return Math.max(...numbers);
}

function sortNumbersAscending(numbers) {
  return [...numbers].sort((a, b) => a - b);
}

function reverseNumbers(numbers) {
  return [...numbers].reverse();
}

function getEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

function getOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

function averageNumbers(numbers) {
  return sumNumbers(numbers) / numbers.length;
}

function removeDuplicateNumbers(numbers) {
  return [...new Set(numbers)];
}

function medianNumber(numbers) {
  const sorted = sortNumbersAscending(numbers);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

function namesOnSeparateLines(names) {
  return names.join("\n");
}

function sortNamesAlphabetically(names) {
  return [...names].sort((a, b) => a.localeCompare(b));
}

function nameExists(names, target) {
  return names.includes(target);
}

function longestName(names) {
  return names.reduce(
    (longest, name) => (name.length > longest.length ? name : longest),
    "",
  );
}

function namesStartingWith(names, letter) {
  const firstLetter = letter.toLowerCase();
  return names.filter((name) => name.toLowerCase().startsWith(firstLetter));
}

function uppercaseNames(names) {
  return names.map((name) => name.toUpperCase());
}

function removeName(names, target) {
  return names.filter((name) => name !== target);
}

function countNamesContainingA(names) {
  return names.filter((name) => name.toLowerCase().includes("a")).length;
}

function joinNames(names) {
  return names.join(", ");
}

function reverseNames(names) {
  return [...names].reverse();
}

const person = {
  name: "IBANZE Miracle",
  age: 20,
  occupation: "Student",
};

function formatPerson(personObject) {
  return `${personObject.name} is ${personObject.age} years old and works as a ${personObject.occupation}.`;
}

function addProperty(object, property, value) {
  object[property] = value;
  return object;
}

function removeProperty(object, property) {
  delete object[property];
  return object;
}

function listProperties(object) {
  return Object.entries(object)
    .map(([property, value]) => `${property}: ${value}`)
    .join("\n");
}

function mergeObjects(first, second) {
  return { ...first, ...second };
}

function hasProperty(object, property) {
  return Object.hasOwn(object, property);
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function printObjectPropertyValues(objects, property) {
  objects.forEach((object) => console.log(object[property]));
}

function updateProperty(object, property, value) {
  object[property] = value;
  return object;
}

function reverseString(text) {
  return Array.from(text).reverse().join("");
}

function countVowels(text) {
  return (text.match(/[aeiou]/gi) || []).length;
}

function uppercaseWithoutBuiltIn(text) {
  let result = "";
  for (const character of text) {
    const code = character.charCodeAt(0);
    result += code >= 97 && code <= 122
      ? String.fromCharCode(code - 32)
      : character;
  }
  return result;
}

function countCharactersWithoutLength(text) {
  let count = 0;
  for (const character of text) {
    count += 1;
  }
  return count;
}

function spacesToHyphens(text) {
  return text.split(" ").join("-");
}

function firstTenCharacters(text) {
  return text.slice(0, 10);
}

function replaceWord(text, searchWord, replacement) {
  return text.split(searchWord).join(replacement);
}

function splitIntoWords(text) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/) : [];
}

function removeNumbers(text) {
  return text.replace(/[0-9]/g, "");
}

function insertAtPositionSeven(text, insertedText) {
  return text.slice(0, 7) + insertedText + text.slice(7);
}

function changePageBackground(color) {
  document.body.style.backgroundColor = color;
}

function hideElement(element) {
  element.hidden = true;
}

function appendParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  document.body.append(paragraph);
  return paragraph;
}

function removeAllListItems(list) {
  list.replaceChildren();
}

function changeTextContent(element, text) {
  element.textContent = text;
}

function toggleElementClass(element, className) {
  return element.classList.toggle(className);
}

function countDivs() {
  return document.querySelectorAll("div").length;
}

function displayInputValue(input, output) {
  output.textContent = input.value;
}

function createNumberTable(container) {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const table = document.createElement("table");
  const body = document.createElement("tbody");

  for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {
    const row = document.createElement("tr");
    for (let columnIndex = 0; columnIndex < 3; columnIndex += 1) {
      const cell = document.createElement("td");
      cell.textContent = String(values[rowIndex * 3 + columnIndex]);
      row.append(cell);
    }
    body.append(row);
  }

  table.append(body);
  container.replaceChildren(table);
  return table;
}

function validateForm(form) {
  const name = form.elements.namedItem("name").value.trim();
  const email = form.elements.namedItem("email").value.trim();
  const password = form.elements.namedItem("password").value;
  return Boolean(name && email && password.trim());
}

const exercises = [
  {
    question:
      "Create an array of 20 numbers and write a function to find the sum of all numbers.",
    answer: `The sample array contains 20 numbers. sumNumbers adds them and returns ${sumNumbers(sampleNumbers)}.`,
    code: `const numbers = [12, 7, 3, 12, 8, 5, 20, 7, 14, 9, 2, 18, 11, 6, 15, 4, 10, 13, 16, 1];\nfunction sumNumbers(numbers) {\n  return numbers.reduce((sum, number) => sum + number, 0);\n}`,
  },
  {
    question: "Write a function to find the largest number in an array of 20 numbers.",
    answer: `largestNumber returns the greatest value, ${largestNumber(sampleNumbers)}, in the sample array.`,
    code: `function largestNumber(numbers) {\n  return Math.max(...numbers);\n}`,
  },
  {
    question: "Write a function to sort an array of 20 numbers in ascending order.",
    answer: `sortNumbersAscending returns a sorted copy, leaving the original array unchanged. Example: ${sortNumbersAscending(sampleNumbers).join(", ")}.`,
    code: `function sortNumbersAscending(numbers) {\n  return [...numbers].sort((a, b) => a - b);\n}`,
  },
  {
    question: "Write a function to reverse an array of 20 numbers.",
    answer: `reverseNumbers returns a reversed copy of the input. Example: ${reverseNumbers(sampleNumbers).join(", ")}.`,
    code: `function reverseNumbers(numbers) {\n  return [...numbers].reverse();\n}`,
  },
  {
    question: "Write a function that takes an array of 20 numbers and returns only even numbers.",
    answer: `getEvenNumbers filters out odd values. Example: ${getEvenNumbers(sampleNumbers).join(", ")}.`,
    code: `function getEvenNumbers(numbers) {\n  return numbers.filter((number) => number % 2 === 0);\n}`,
  },
  {
    question: "Write a function that takes an array of 20 numbers and returns only odd numbers.",
    answer: `getOddNumbers filters out even values. Example: ${getOddNumbers(sampleNumbers).join(", ")}.`,
    code: `function getOddNumbers(numbers) {\n  return numbers.filter((number) => number % 2 !== 0);\n}`,
  },
  {
    question: "Write a function that takes an array of 20 numbers and returns the average of those numbers.",
    answer: `averageNumbers divides the sum by the number of values. The sample average is ${averageNumbers(sampleNumbers)}.`,
    code: `function averageNumbers(numbers) {\n  const sum = numbers.reduce((total, number) => total + number, 0);\n  return sum / numbers.length;\n}`,
  },
  {
    question: "Write a function to remove duplicates from an array of 20 numbers.",
    answer: `removeDuplicateNumbers keeps only the first occurrence of each value. Example: ${removeDuplicateNumbers(sampleNumbers).join(", ")}.`,
    code: `function removeDuplicateNumbers(numbers) {\n  return [...new Set(numbers)];\n}`,
  },
  {
    question: "Write a function that takes an array of 20 numbers and returns the median value.",
    answer: `medianNumber sorts a copy and averages the two middle values for an even-sized array. The sample median is ${medianNumber(sampleNumbers)}.`,
    code: `function medianNumber(numbers) {\n  const sorted = [...numbers].sort((a, b) => a - b);\n  const middle = Math.floor(sorted.length / 2);\n  return sorted.length % 2 === 0\n    ? (sorted[middle - 1] + sorted[middle]) / 2\n    : sorted[middle];\n}`,
  },
  {
    question: "Write a function to multiply all elements in an array of 20 numbers by 2.",
    answer: `doubleNumbers creates a new array with every value doubled. Example: ${doubleNumbers(sampleNumbers).join(", ")}.`,
    code: `function doubleNumbers(numbers) {\n  return numbers.map((number) => number * 2);\n}`,
  },
  {
    question: "Create an array of 20 names and write a function to print each name on a new line.",
    answer: `namesOnSeparateLines joins the 20 sample names with newline characters. The first names are ${sampleNames.slice(0, 3).join(", ")}.`,
    code: `const names = ["Amina", "Brian", "Chantal", "David", "Elise", "Fabrice", "Grace", "Hassan", "Imani", "Jean", "Keza", "Linda", "Mugisha", "Nadia", "Oscar", "Patrick", "Queen", "Samuel", "Teta", "Yvonne"];\nfunction namesOnSeparateLines(names) {\n  return names.join("\\n");\n}\nconsole.log(namesOnSeparateLines(names));`,
  },
  {
    question: "Write a function to sort an array of 20 names alphabetically.",
    answer: `sortNamesAlphabetically returns an alphabetized copy of the names without changing the original.`,
    code: `function sortNamesAlphabetically(names) {\n  return [...names].sort((a, b) => a.localeCompare(b));\n}`,
  },
  {
    question: "Write a function that checks if a specific name exists in an array of 20 names and returns true or false.",
    answer: `nameExists uses includes for an exact match; for example, nameExists(names, "Amina") returns ${nameExists(sampleNames, "Amina")}.`,
    code: `function nameExists(names, target) {\n  return names.includes(target);\n}`,
  },
  {
    question: "Write a function to find the longest name in an array of 20 names.",
    answer: `longestName returns the name with the greatest number of characters. The sample's longest name is ${longestName(sampleNames)}.`,
    code: `function longestName(names) {\n  return names.reduce((longest, name) =>\n    name.length > longest.length ? name : longest, "");\n}`,
  },
  {
    question: "Write a function to find names that start with a specific letter in an array of 20 names.",
    answer: `namesStartingWith ignores letter case. Names beginning with "a" in the sample: ${namesStartingWith(sampleNames, "a").join(", ")}.`,
    code: `function namesStartingWith(names, letter) {\n  const firstLetter = letter.toLowerCase();\n  return names.filter((name) => name.toLowerCase().startsWith(firstLetter));\n}`,
  },
  {
    question: "Write a function to convert all names to uppercase in an array of 20 names.",
    answer: `uppercaseNames maps every name to uppercase. Example: ${uppercaseNames(sampleNames.slice(0, 3)).join(", ")}.`,
    code: `function uppercaseNames(names) {\n  return names.map((name) => name.toUpperCase());\n}`,
  },
  {
    question: "Write a function to remove a specific name from an array of 20 names.",
    answer: `removeName returns a new array without names matching the target. For example, removeName(names, "Amina") removes Amina.`,
    code: `function removeName(names, target) {\n  return names.filter((name) => name !== target);\n}`,
  },
  {
    question: 'Write a function to count how many names contain the letter "a" in an array of 20 names.',
    answer: `countNamesContainingA checks case-insensitively. ${countNamesContainingA(sampleNames)} of the sample names contain "a".`,
    code: `function countNamesContainingA(names) {\n  return names.filter((name) => name.toLowerCase().includes("a")).length;\n}`,
  },
  {
    question: "Write a function to concatenate all names in an array of 20 names into a single string, separated by commas.",
    answer: `joinNames combines all 20 names using comma-space separators. Example: ${joinNames(sampleNames.slice(0, 4))}.`,
    code: `function joinNames(names) {\n  return names.join(", ");\n}`,
  },
  {
    question: "Write a function to reverse the order of an array of 20 names.",
    answer: `reverseNames returns a reversed copy; the first name in the result is ${reverseNames(sampleNames)[0]}.`,
    code: `function reverseNames(names) {\n  return [...names].reverse();\n}`,
  },
  {
    question: "Create a JavaScript object that represents a person (with properties: name, age, and occupation).",
    answer: `The person object has name, age, and occupation properties: ${formatPerson(person)}`,
    code: `const person = {\n  name: "IBANZE Miracle",\n  age: 20,\n  occupation: "Student"\n};`,
  },
  {
    question: "Write a function that takes a person object and returns a formatted string with their information.",
    answer: `formatPerson turns the object's properties into a readable sentence: "${formatPerson(person)}"`,
    code: `function formatPerson(person) {\n  return \`\${person.name} is \${person.age} years old and works as a \${person.occupation}.\`;\n}`,
  },
  {
    question: "Write a function to add a new property to an existing object.",
    answer: `addProperty assigns a value using a property name, for example addProperty(person, "city", "Kigali").`,
    code: `function addProperty(object, property, value) {\n  object[property] = value;\n  return object;\n}`,
  },
  {
    question: "Write a function to remove a property from an existing object.",
    answer: `removeProperty deletes the requested property and returns the updated object.`,
    code: `function removeProperty(object, property) {\n  delete object[property];\n  return object;\n}`,
  },
  {
    question: "Write a function to list all properties and values of a JavaScript object.",
    answer: `listProperties converts each key-value pair to a separate line. For person: ${listProperties(person).replaceAll("\n", "; ")}.`,
    code: `function listProperties(object) {\n  return Object.entries(object)\n    .map(([property, value]) => \`\${property}: \${value}\`)\n    .join("\\n");\n}`,
  },
  {
    question: "Write a function to merge two objects into one.",
    answer: `mergeObjects combines both objects; if a key occurs in both, the second object's value is used.`,
    code: `function mergeObjects(first, second) {\n  return { ...first, ...second };\n}\n\nconst merged = mergeObjects({ name: "Amina" }, { age: 20 });`,
  },
  {
    question: "Write a function to check if a property exists in an object.",
    answer: `hasProperty checks for an object's own property (not one inherited from its prototype).`,
    code: `function hasProperty(object, property) {\n  return Object.hasOwn(object, property);\n}`,
  },
  {
    question: "Write a function to clone an object without referencing the original one.",
    answer: `cloneObject creates an independent deep copy for plain objects containing JSON-compatible values.`,
    code: `function cloneObject(object) {\n  return JSON.parse(JSON.stringify(object));\n}`,
  },
  {
    question: "Write a function that loops through an array of objects and prints a specific property of each object.",
    answer: `printObjectPropertyValues loops through the array and prints the selected property for each object.`,
    code: `function printObjectPropertyValues(objects, property) {\n  objects.forEach((object) => console.log(object[property]));\n}\n\nprintObjectPropertyValues(people, "name");`,
  },
  {
    question: "Write a function that updates a specific property of an object based on user input.",
    answer: `updateProperty receives a value supplied by the user (for example, from an input field) and changes that property.`,
    code: `function updateProperty(object, property, value) {\n  object[property] = value;\n  return object;\n}\n\n// Example: updateProperty(person, "name", nameInput.value);`,
    demo: "object-update",
  },
  {
    question: "Write a function that takes a string and reverses the string.",
    answer: `reverseString reverses characters using an array of Unicode code points. Example: "${reverseString("JavaScript")}".`,
    code: `function reverseString(text) {\n  return Array.from(text).reverse().join("");\n}`,
  },
  {
    question: "Write a function to count the number of vowels in a given string.",
    answer: `countVowels counts a, e, i, o, and u regardless of case. "Interactive" has ${countVowels("Interactive")} vowels.`,
    code: `function countVowels(text) {\n  return (text.match(/[aeiou]/gi) || []).length;\n}`,
  },
  {
    question: "Write a function to convert a string to uppercase without using built-in methods.",
    answer: `uppercaseWithoutBuiltIn converts basic English lowercase letters by adjusting their character codes; other characters remain unchanged.`,
    code: `function uppercaseWithoutBuiltIn(text) {\n  let result = "";\n  for (const character of text) {\n    const code = character.charCodeAt(0);\n    result += code >= 97 && code <= 122\n      ? String.fromCharCode(code - 32)\n      : character;\n  }\n  return result;\n}`,
  },
  {
    question: "Write a function to find the length of a string without using .length.",
    answer: `countCharactersWithoutLength counts each Unicode code point in a loop and does not read the string's length property.`,
    code: `function countCharactersWithoutLength(text) {\n  let count = 0;\n  for (const character of text) {\n    count += 1;\n  }\n  return count;\n}`,
  },
  {
    question: "Write a function to replace all spaces with hyphens in a string.",
    answer: `spacesToHyphens replaces every ordinary space. Example: "${spacesToHyphens("Interactive web development")}".`,
    code: `function spacesToHyphens(text) {\n  return text.split(" ").join("-");\n}`,
  },
  {
    question: "Write a function to extract the first 10 characters from a string.",
    answer: `firstTenCharacters returns the first ten characters (or the whole string if it is shorter).`,
    code: `function firstTenCharacters(text) {\n  return text.slice(0, 10);\n}`,
  },
  {
    question: "Write a function to find and replace a word in a string.",
    answer: `replaceWord replaces every exact occurrence of the search word. Example: "${replaceWord("JavaScript is fun", "fun", "useful")}".`,
    code: `function replaceWord(text, searchWord, replacement) {\n  return text.split(searchWord).join(replacement);\n}`,
  },
  {
    question: "Write a function to split a string into an array of words.",
    answer: `splitIntoWords trims the string and splits on one or more whitespace characters.`,
    code: `function splitIntoWords(text) {\n  const trimmed = text.trim();\n  return trimmed ? trimmed.split(/\\s+/) : [];\n}`,
  },
  {
    question: "Write a function to remove all numbers from a string.",
    answer: `removeNumbers removes every digit from 0 to 9. Example: "${removeNumbers("Room 204, floor 3")}".`,
    code: `function removeNumbers(text) {\n  return text.replace(/[0-9]/g, "");\n}`,
  },
  {
    question: "Write a function to insert another string in the existing starting at position 7.",
    answer: `insertAtPositionSeven inserts after the first seven characters (string index 7).`,
    code: `function insertAtPositionSeven(text, insertedText) {\n  return text.slice(0, 7) + insertedText + text.slice(7);\n}`,
  },
  {
    question: "Write a JavaScript function that changes the background color of a webpage when a button is clicked.",
    answer: `Click the button to change the page background color.`,
    code: `function changePageBackground(color) {\n  document.body.style.backgroundColor = color;\n}\n\nbutton.addEventListener("click", () => changePageBackground("#dceeff"));`,
    demo: "background",
  },
  {
    question: "Write a JavaScript function to hide an HTML element when a button is clicked.",
    answer: `Click Hide message to hide the sample message.`,
    code: `function hideElement(element) {\n  element.hidden = true;\n}\n\nbutton.addEventListener("click", () => hideElement(message));`,
    demo: "hide",
  },
  {
    question: "Write a JavaScript function to create a new paragraph element and append it to the body.",
    answer: `Click the button to create and append a paragraph to the page.`,
    code: `function appendParagraph(text) {\n  const paragraph = document.createElement("p");\n  paragraph.textContent = text;\n  document.body.append(paragraph);\n  return paragraph;\n}\n\nappendParagraph("This paragraph was created with JavaScript.");`,
    demo: "paragraph",
  },
  {
    question: "Write a JavaScript function to remove all list items from an unordered list.",
    answer: `Click Clear list to remove every item from the sample unordered list.`,
    code: `function removeAllListItems(list) {\n  list.replaceChildren();\n}\n\nbutton.addEventListener("click", () => removeAllListItems(list));`,
    demo: "list",
  },
  {
    question: "Write a JavaScript function to change the text content of a specific HTML element.",
    answer: `Click the button to change the text in the sample element.`,
    code: `function changeTextContent(element, text) {\n  element.textContent = text;\n}\n\nbutton.addEventListener("click", () =>\n  changeTextContent(message, "The text has changed.")\n);`,
    demo: "text",
  },
  {
    question: "Write a JavaScript function to toggle a CSS class on an HTML element.",
    answer: `Click Toggle highlight to add or remove the highlight class.`,
    code: `function toggleElementClass(element, className) {\n  return element.classList.toggle(className);\n}\n\nbutton.addEventListener("click", () =>\n  toggleElementClass(message, "highlight")\n);`,
    demo: "class",
  },
  {
    question: "Write a JavaScript function to count the number of divs on a webpage.",
    answer: `Click Count divs to count all div elements currently in the document (including this page's examples).`,
    code: `function countDivs() {\n  return document.querySelectorAll("div").length;\n}\n\nbutton.addEventListener("click", () => {\n  output.textContent = \`Divs on the page: \${countDivs()}\`;\n});`,
    demo: "count-divs",
  },
  {
    question: "Write a JavaScript function to get the value of a text input field and display it in a paragraph.",
    answer: `Enter text and click Display value to copy the input into the paragraph.`,
    code: `function displayInputValue(input, output) {\n  output.textContent = input.value;\n}\n\nbutton.addEventListener("click", () =>\n  displayInputValue(textInput, output)\n);`,
    demo: "input",
  },
  {
    question: "Write a JavaScript function to create a table with 3 rows and 3 columns, and populate it with numbers of your choice.",
    answer: `Click Create table to build a 3 × 3 table containing the numbers 1 through 9.`,
    code: `function createNumberTable(container) {\n  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n  const table = document.createElement("table");\n  const body = document.createElement("tbody");\n\n  for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {\n    const row = document.createElement("tr");\n    for (let columnIndex = 0; columnIndex < 3; columnIndex += 1) {\n      const cell = document.createElement("td");\n      cell.textContent = String(values[rowIndex * 3 + columnIndex]);\n      row.append(cell);\n    }\n    body.append(row);\n  }\n\n  table.append(body);\n  container.replaceChildren(table);\n  return table;\n}`,
    demo: "table",
  },
  {
    question: "Write a JavaScript function to validate a form (check if name, email, and password fields are filled).",
    answer: `Submit the sample form with all three fields filled in to pass validation. This checks that they are non-empty; it does not validate email format.`,
    code: `function validateForm(form) {\n  const name = form.elements.namedItem("name").value.trim();\n  const email = form.elements.namedItem("email").value.trim();\n  const password = form.elements.namedItem("password").value;\n  return Boolean(name && email && password.trim());\n}`,
    demo: "form",
  },
];

const groups = [
  { title: "Arrays", start: 0, end: 10 },
  { title: "Arrays of Strings (Names)", start: 10, end: 20 },
  { title: "Objects", start: 20, end: 30 },
  { title: "Strings", start: 30, end: 40 },
  { title: "HTML Elements and DOM Manipulation", start: 40, end: 50 },
];

const assignment = document.querySelector("#assignment");

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeButton(label, action) {
  const button = createElement("button", "demo-button", label);
  button.type = "button";
  button.addEventListener("click", action);
  return button;
}

function createDemo(type) {
  const demo = createElement("div", "demo");
  demo.append(createElement("p", "demo-label", "Try it:"));

  if (type === "background") {
    demo.append(
      makeButton("Change page color", () => changePageBackground("#e0f2fe")),
    );
  } else if (type === "hide") {
    const message = createElement("p", "demo-message", "This message will hide.");
    demo.append(message);
    demo.append(makeButton("Hide message", () => hideElement(message)));
  } else if (type === "paragraph") {
    demo.append(createElement("p", "demo-message", "A paragraph will be added to the page."));
    demo.append(
      makeButton("Create paragraph", () => {
        appendParagraph("This paragraph was created with JavaScript.");
      }),
    );
  } else if (type === "list") {
    const list = document.createElement("ul");
    for (const fruit of ["Mango", "Orange", "Pineapple"]) {
      list.append(createElement("li", "", fruit));
    }
    demo.append(list, makeButton("Clear list", () => removeAllListItems(list)));
  } else if (type === "text") {
    const message = createElement("p", "demo-message", "Original sample text.");
    demo.append(
      message,
      makeButton("Change text", () =>
        changeTextContent(message, "The text has changed."),
      ),
    );
  } else if (type === "class") {
    const message = createElement("p", "demo-message", "Toggle my highlight.");
    demo.append(
      message,
      makeButton("Toggle highlight", () =>
        toggleElementClass(message, "highlight"),
      ),
    );
  } else if (type === "count-divs") {
    const output = createElement("p", "demo-output", "Click to count divs.");
    demo.append(
      output,
      makeButton("Count divs", () => {
        output.textContent = `Divs on the page: ${countDivs()}`;
      }),
    );
  } else if (type === "input") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type something";
    input.setAttribute("aria-label", "Text to display");
    const output = createElement("p", "demo-output", "Your text will appear here.");
    demo.append(
      input,
      makeButton("Display value", () => displayInputValue(input, output)),
      output,
    );
  } else if (type === "table") {
    const output = createElement("div", "demo-output");
    demo.append(
      output,
      makeButton("Create table", () => createNumberTable(output)),
    );
  } else if (type === "form") {
    const form = document.createElement("form");
    form.className = "demo-form";
    form.noValidate = true;
    for (const field of [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ]) {
      const label = createElement("label", "form-field", field.label);
      const input = document.createElement("input");
      input.name = field.name;
      input.type = field.type;
      input.autocomplete = field.name === "password" ? "current-password" : "off";
      input.required = true;
      label.append(input);
      form.append(label);
    }
    const output = createElement("p", "demo-output", "");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const valid = validateForm(form);
      output.textContent = valid
        ? "Success: all fields are filled."
        : "Please fill in your name, email, and password.";
      output.classList.toggle("error", !valid);
    });
    form.append(makeButton("Validate form", () => form.requestSubmit()), output);
    demo.append(form);
  } else if (type === "object-update") {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = person.name;
    nameInput.setAttribute("aria-label", "New person name");
    const output = createElement("p", "demo-output", formatPerson(person));
    demo.append(
      nameInput,
      makeButton("Update name", () => {
        updateProperty(person, "name", nameInput.value.trim());
        output.textContent = formatPerson(person);
      }),
      output,
    );
  }

  return demo;
}

function renderAssignment() {
  for (const group of groups) {
    const section = createElement("section", "topic");
    section.append(createElement("p", "topic-title", group.title));

    exercises.slice(group.start, group.end).forEach((exercise, offset) => {
      const number = group.start + offset + 1;
      const article = createElement("article", "exercise");
      article.id = `question-${number}`;

      const heading = createElement("h2", "question", `${number}. ${exercise.question}`);
      const codeLabel = createElement("p", "code-label", "Answer");
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = exercise.code;
      pre.append(code);

      article.append(heading, codeLabel, pre);
      if (exercise.demo) article.append(createDemo(exercise.demo));
      section.append(article);
    });

    assignment.append(section);
  }
}

renderAssignment();
