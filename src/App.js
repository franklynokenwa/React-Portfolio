import Header from './components/Header';
import About from './components/About'
import Mission from './components/Mission';
import Shortly from './components/Shortly';
import MemeGenerator from './components/MemeGenerator';
import ECommerceStore from './components/ECommerceStore';
import Calculator from './components/Calculator';
import CountryDataApp from './components/CountryDataApp';
import CountryDataAppScreenshot from './images/countryDataAppScreenshot.PNG';
import emillenialStoreHomePage from './images/emillenialStoreHomePage.PNG'
import memeGeneratorScreenshot from './images/memeGeneratorScreenshot.PNG'
import shortlyScreenshot from './images/shortlyScreenshot.PNG'
import simpleCalculator from './images/simpleCalculator.PNG'
import GlobalStyles from './components/styles/GlobalStyles';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  AOS.init({
    offset: 200,
    duration: 1500,
    easing: 'ease'
  });

  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <About/>
      <Mission/>
      <Shortly 
        projectHead='Shortly'
        projectDetails='This is an app that allow users to shorten urls'
        projectLink='https://franklynwisdom.github.io/Shortly/'
        projectImage={shortlyScreenshot}      
        />
      <CountryDataApp
        projectHead='A country data app'
        projectDetails='This is a web application that displays information about countries from an Api,
        it displays information such as region, population, currency of different countries. It has a search 
        functionality that allows users to search for their country of interest. The app also contains a toggle 
        feature that allows users to toggle between light and dark mode.'
        projectLink='https://franklynwisdom.github.io/country-data-app/' 
        projectImage={CountryDataAppScreenshot}
      />
      <MemeGenerator
        projectHead='A Simple Meme Generator'
        projectDetails='The meme generator app was built with React and it allows users to generate memes with 
        random images. Users are required to input texts which are shown at the top and bottom of the random 
        image. This project was built to help me solidify the basic concepts of React.'
        projectLink='https://franklynwisdom.github.io/simple-meme-generator/' 
        projectImage={memeGeneratorScreenshot}
      />
      <ECommerceStore
        projectHead='An E-commerce store'
        projectDetails='This is an E commerce website built with HTML, CSS and JavaScript.
         It enables users to purchase gadgets displayed for sale. 
         A test Paypal payment gateway was also integrated in it and an email is sent to users 
         after every successful purchase.'
        projectLink='https://franklynwisdom.github.io/E-millenial-Ecommerce-website/' 
        projectImage={emillenialStoreHomePage}
      />
      <Calculator
        projectHead='A simple calculator'
        projectDetails='This is a simple calculator built with Html, CSS and JavaScript.
        It can perform simple arithmetic operations like addition,
        subtraction, multiplication and division.'
        projectLink='https://a-simple-calculator-kvib2x1om-franklynwisdom.vercel.app/' 
        projectImage={simpleCalculator}
      />
    </div>
  );
}

export default App;
