import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>ToDo List</h2>
      <header className="App-header">
        <input type="text" placeholder="To-Do Title"/>
        <button class="App-link">+</button>
      </header>
      <main>
        <ul>
          <li>Lista</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
