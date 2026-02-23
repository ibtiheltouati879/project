const stories = [
  {
    objectID: "1",
    title: "React ",
    url: "https://react.dev",
    author: "david",
    points: 120,
    num_comments: 45
  },
  {
    objectID: "2",
    title: "JavaScript Closures",
    url: "https://developer.mozilla.org",
    author: "jack",
    points: 95,
    num_comments: 30
  }
];

function App() {
  return (
    <div>
  {stories.map((story) => (
    <div key={story.objectID}>
  <h3>
    <a href={story.url} target="_blank" rel="noreferrer">
      {story.title}
    </a>
  </h3>

  <p>Author: {story.author}</p>
  <p>Points: {story.points}</p>
  <p>Comments: {story.num_comments}</p>
</div>
  ))}
</div>
  );
}
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
      <label htmlFor="nameInput">Enter your name:</label>
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
export default App;
const courseTitle = "CS220 - Advanced Web Development";
/*Structure:
{
  objectID: string,
  title: string,
  url: string,
  author: string,
  points: number,
  num_comments: number
}
React Key:
We should use objectID as the key.
Why?
Because it is unique for each story.*/
/*Reflection:
map() is essential because it transforms arrays into JSX elements.
objectID is correct as key because it uniquely identifies each story.
When using the real Hacker News API, stories will come from a fetch request instead of hard-coded data.*/
