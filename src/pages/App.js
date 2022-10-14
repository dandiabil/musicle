import { Route, Routes } from 'react-router-dom';
import Information from '../components/info';
import HomePage from './home-page/home-page';
import PlayPage from './play-page/play-page';

const App = () => {
  return (
    <div className="home-page max-w-screen min-h-screen bg-black flex items-center justify-center h-full overflow-auto relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
      <Information />
    </div>
  );
};

export default App;
