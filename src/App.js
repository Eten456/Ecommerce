import './App.css';
import HomePage from './guest/homepage';

function App() {
  return (
    <Routers>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Routers>
  );
}

export default App;