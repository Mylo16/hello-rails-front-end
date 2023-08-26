import { Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
