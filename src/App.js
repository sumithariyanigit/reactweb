import React from "react";
import Header from './Header'
import Footer from './Footer'
import HeroSection from './Components/HeroSection'
import FeaturedCategory from './Components/FeaturedCategory'
import PopularCategory from './Components/PopularCategory'
import BestOffers from './Components/BestOffers'
import RecentBlogs from './Components/RecentBlogs'
import Subscribe from './Components/Subscribe'
import Testimonial from './Components/Testimonial'


function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    <FeaturedCategory />
    <PopularCategory />
    <BestOffers />
    <RecentBlogs />
    <Testimonial />
    <Subscribe />
    <Footer />
    </div>
  );
}
export default App;
