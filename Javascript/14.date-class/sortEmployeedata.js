const employees = [
  { name: "Employee 1", dob: "1985-01-15" },
  { name: "Employee 2", dob: "1990-02-20" },
  { name: "Employee 3", dob: "1978-03-12" }
];

// Function to calculate age from DOB
function calculateAge(dobString) {
  const dob = new Date(dobString);      // convert string to Date
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();  // initial year difference

  // adjust if birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

// Add age property to each employee
const employeesWithAge = employees.map(emp => {
  return { ...emp, age: calculateAge(emp.dob) };
});

console.log(employeesWithAge);
