function App() {
  const studentName = "Ibtihel Touati";
  const student = {
    name: "Ibtihel Touati",
    age: 20,
    track: "Business Administration"
  };
  function sayHello() {
    return "Hello " + studentName + "!";
  }
  return (
    <div>
      {}
      <h1>Welcome to My First React Component</h1>
      {}
      <p>Student Name: {studentName}</p>
      {}
      <p>Course: {courseTitle}</p>
      {}
      <p>Welcome to {courseTitle}, {studentName}!</p>
      {}
      <label>Enter your name:</label>
      <input id="nameInput" type="text" />
      {}
      <h2>Student Information</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      {}
      <p>{sayHello()}</p>
    </div>
  );
}
export default App;
const courseTitle = "CS220 - Advanced Web Development";
