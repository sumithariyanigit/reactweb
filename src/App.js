import Header from './Header'
import Footer from './Footer'
import HeroSection from './Components/HeroSection'
import FeaturedCategory from './Components/FeaturedCategory';



function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection />
    
    <FeaturedCategory />
    <Footer/>
    </div>
  );
}

export default App;
