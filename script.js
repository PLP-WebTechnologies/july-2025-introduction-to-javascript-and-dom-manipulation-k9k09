/* ==========================
   Part 1: Variables & Conditionals
   ========================== */
const checkBtn = document.getElementById('checkNumber');
checkBtn.addEventListener('click', function() {
  const num = Number(document.getElementById('userNumber').value);
  const result = document.getElementById('numberResult');
  
  if (num > 0) {
    result.textContent = 'Positive number';
  } else if (num < 0) {
    result.textContent = 'Negative number';
  } else {
    result.textContent = 'Zero';
  }
});

/* ==========================
   Part 2: Functions
   ========================== */
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

document.getElementById('greetBtn').addEventListener('click', function() {
  const message = greetUser('Student'); // Example input
  document.getElementById('greetResult').textContent = message;
});

// Another function example
function sum(a, b) {
  return a + b;
}

/* ==========================
   Part 3: Loops
   ========================== */
document.getElementById('loopBtn').addEventListener('click', function() {
  let output = '';
  for (let i = 1; i <= 5; i++) {
    output += i + ' ';
  }
  document.getElementById('loopResult').textContent = output;
});

// Another loop example
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => console.log(fruit));

/* ==========================
   Part 4: DOM Manipulation
   ========================== */
const domBox = document.getElementById('domBox');

document.getElementById('changeTextBtn').addEventListener('click', function() {
  domBox.textContent = 'Text has been changed!';
});

document.getElementById('toggleColorBtn').addEventListener('click', function() {
  domBox.classList.toggle('highlight');
});

// Optional: CSS class for toggle
const style = document.createElement('style');
style.innerHTML = `
  .highlight { background-color: yellow; color: black; }
`;
document.head.appendChild(style);
