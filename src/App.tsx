
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LandingPage from './pages/LandingPage'
import Typing from './pages/Typing'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
   
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/typing" element={<Typing />} />

          </Routes>
        </BrowserRouter>

  </QueryClientProvider>
);

export default App;
