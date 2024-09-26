import Body from './coponents/body.jsx';  // Correct the path
import './styles.css';
import bg from './images/bg.webp';
import bg2 from './images/bg2.webp';
import bg3 from './images/bg3.webp';
import bg4 from './images/bg4.webp';
import bg5 from './images/bg5.webp';
import bg8 from './images/bg8.jpg';
import bg6 from './images/default.jpg';
import bg7 from './images/default2.jpg';


function App() {
  return (
    <>
    <div className="relative h-screen w-screen">
        {/* Background Image */}
       

        {/* Navbar */}
        <Body 
        image1={bg} 
        image2={bg2} 
        image3={bg3} 
        image4={bg4} 
        image5={bg5} 
        image6={bg6} 
        image7={bg7} 
        image8={bg8} 
      />
       
      </div>
    </>
  );
}

export default App;
