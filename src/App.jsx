const courseTitle = "CS220 - Advanced Web Development";
function App() {
  return (
    <div>
      <h1>My First React project</h1>
    </div>
  );
}
export default App;
  function sayHello() {
    return "Hello " + studentName + "!";
  }

  return (
    <div>
      <h1>Welcome to My First React Component</h1>
      <p>Student Name: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="nameInput">Enter your name:</label>
      <input id="nameInput" type="text" />
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
    </div>
  );
}
export default App;


One mistake I made and fixed:
I forgot to use curly braces {} to display JavaScript variables in JSX.
*/
