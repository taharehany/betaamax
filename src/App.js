import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import CatPage from './components/CatPage';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Cat1 from './components/cats/Cat1';
import Cat2 from './components/cats/Cat2';
import Cat3 from './components/cats/Cat3';
import Cat4 from './components/cats/Cat4';
import Cat5 from './components/cats/Cat5';
import Cat6 from './components/cats/Cat6';
import Cat7 from './components/cats/Cat7';
import Cat8 from './components/cats/Cat8';
import Cat9 from './components/cats/Cat9';
import Cat10 from './components/cats/Cat10';
import Cat11 from './components/cats/Cat11';
import Cat12 from './components/cats/Cat12';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/betaamax" component={Home} />
              <Route path="/categories" component={CatPage} />
              <Route path="/products" exact component={Products} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/products/cat1" component={Cat1} />
              <Route path="/products/cat2" component={Cat2} />
              <Route path="/products/cat3" component={Cat3} />
              <Route path="/products/cat4" component={Cat4} />
              <Route path="/products/cat5" component={Cat5} />
              <Route path="/products/cat6" component={Cat6} />
              <Route path="/products/cat7" component={Cat7} />
              <Route path="/products/cat8" component={Cat8} />
              <Route path="/products/cat9" component={Cat9} />
              <Route path="/products/cat10" component={Cat10} />
              <Route path="/products/cat11" component={Cat11} />
              <Route path="/products/cat12" component={Cat12} />
            </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
