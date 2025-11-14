// Normal Parameterized Function - Area of Rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

function calculateArea() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;

  if (length && width) {
    const area = areaOfRectangle(length, width);
    document.getElementById("areaResult").textContent = `Area of Rectangle: ${area}`;
  } else {
    document.getElementById("areaResult").textContent = "Please enter both values!";
  }
}

// Arrow Function - Voter Eligibility Check
const checkVoterEligibility = (age) => {
  return age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
};

function checkEligibility() {
  const age = document.getElementById("age").value;

  if (age) {
    const result = checkVoterEligibility(age);
    document.getElementById("voteResult").textContent = result;
  } else {
    document.getElementById("voteResult").textContent = "Please enter your age!";
  }
}
