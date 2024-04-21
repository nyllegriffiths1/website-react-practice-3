import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import ImageSlider from './components/imageSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ImageSlider />
    </div>
  );
}

export default App;
