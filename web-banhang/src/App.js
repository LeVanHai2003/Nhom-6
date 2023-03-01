
import './App.css';
import './css/responsive.css'
import './css/helper.css'

import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/venobox.css'
import './css/jquery-ui.min.css'
import './css/animate.css'
import './css/owl.carousel.min.css'
import './css/slick.css'
import './css/meanmenu.css'
import './css/fontawesome-stars.css'




import Header from './containers/Header';
import Footer from './containers/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheckSquare, faCoffee);





function App() {
  return (
    <>
    <Header/>
    <Footer/>
    </>
  );
}

export default App;
