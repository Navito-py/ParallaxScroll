import 'pushin/dist/pushin.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PushInComponent from './components/PushInComponent';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<PushInComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


