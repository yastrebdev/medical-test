import { Routes, Route } from 'react-router-dom';
import { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Result } from './pages';
import { Start } from './pages';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/q-1" element={<Question1 />} />
      <Route path="/q-2" element={<Question2 />} />
      <Route path="/q-3" element={<Question3 />} />
      <Route path="/q-4" element={<Question4 />} />
      <Route path="/q-5" element={<Question5 />} />
      <Route path="/q-6" element={<Question6 />} />
      <Route path="/q-7" element={<Question7 />} />
      <Route path="/q-8" element={<Question8 />} />
      <Route path="/q-9" element={<Question9 />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
