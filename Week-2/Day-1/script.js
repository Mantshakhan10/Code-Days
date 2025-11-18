// ES6 Practice File — writes output to page

// Helper: print lines to the <pre id="output">
const outEl = document.getElementById ? document.getElementById('output') : null;
function log(...args) {
  const line = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
  if (outEl) {
    outEl.textContent += line + '\n';
  }
  // also log to console for debugging
  console.log(...args);
}

// The demo function that uses ES6 features
function runES6Demo() {
  // Clear previous output
  if (outEl) outEl.textContent = '';

  // 1. CONST & LET
  const appName = "ES6 Practice";
  let version = 1.0;
  log(`App: ${appName} (v${version})`);

  // 2. TEMPLATE LITERAL
  const intro = `Welcome to ${appName}! Current version: ${version}`;
  log(intro);

  // 3. OBJECT DESTRUCTURING
  const student = {
      name: "Mantsha",
      age: 19,
      course: "Web Development"
  };

  const { name, course } = student;
  log(`Student: ${name}, Course: ${course}`);

  // 4. ARRAY DESTRUCTURING
  const colors = ["red", "green", "blue"];
  const [primary, secondary] = colors;
  log(`Primary Color: ${primary} — Secondary: ${secondary}`);

  // 5. SPREAD OPERATOR
  const fruits1 = ["apple", "banana"];
  const fruits2 = ["mango", "orange"];
  const allFruits = [...fruits1, ...fruits2];
  log("Merged Fruits:", allFruits);

  // 6. REST OPERATOR
  function showHobbies(...hobbies) {
      return `Hobbies: ${hobbies.join(", ")}`;
  }
  log(showHobbies("coding", "gym", "reading"));

  // 7. ARROW FUNCTION
  const area = (w, h) => w * h;
  log("Area of rectangle (5x4):", area(5, 4));

  // 8. DEFAULT PARAMETERS WITH ARROW
  const greet = (user = "Guest") => `Hello, ${user}!`;
  log(greet("Mantsha"));
  log(greet());

  // 9. Example: Spread into object + nested destructuring
  const car = { brand: "Tesla", model: "Model 3", specs: { range: "350km", topSpeed: "225km/h" } };
  const { brand, model, specs: { range } } = car;
  log(`Car: ${brand} ${model} — Range: ${range}`);

  // 10. Example: map + arrow + template literal
  const upperFruits = allFruits.map(f => f.toUpperCase());
  log("Uppercase fruits:", upperFruits.join(", "));

  log("\n-- Demo finished --");
}

// Wire buttons
const runBtn = document.getElementById('runBtn');
const clearBtn = document.getElementById('clearBtn');

if (runBtn) runBtn.addEventListener('click', runES6Demo);
if (clearBtn && outEl) clearBtn.addEventListener('click', () => outEl.textContent = '');

// Optionally run once on load:
// runES6Demo();
