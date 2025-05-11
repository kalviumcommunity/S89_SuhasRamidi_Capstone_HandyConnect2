import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="card">
        <button>
          Click Me
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>© 2025 HandyConnect</footer>
    </>
  );
}

export default App;
