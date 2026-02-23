// Variable defined OUTSIDE the component (Step 3)
const courseTitle = "CS220 - Advanced Web Development";

function App() {
  return (
    <div>
      <h1>My First React project</h1>
    </div>
  );
}

export default App;

  // Step 7: Function
  function sayHello() {
    return "Hello " + studentName + "!";
  }

  return (
    <div>

      {/* Step 1 */}
      <h1>Welcome to My First React Component</h1>

      {/* Step 2 */}
      <p>Student Name: {studentName}</p>

      {/* Step 3 */}
      <p>Course: {courseTitle}</p>

      {/* Step 4 */}
      <p>Welcome to {courseTitle}, {studentName}!</p>

      {/* Step 5 */}
      <label htmlFor="nameInput">Enter your name:</label>
      <input id="nameInput" type="text" />

      {/* Step 6 */}
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      {/* Step 7 */}
      <p>{sayHello()}</p>

    </div>
  );
}

export default App;

/*
Step 8 – Reflection Questions

One thing I understand well:
How JSX allows us to combine JavaScript and HTML.

One thing that is still confusing:
When to define variables inside vs outside the component.

One mistake I made and fixed:
I forgot to use curly braces {} to display JavaScript variables in JSX.
*/
