import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './components/components.css'
// import './App.css';
import HeaderContainer from './components/header/HeaderContainer.component';
import MovieDetails from './components/MovieDetails.component';
import Home from './components/Home.component';
import GenreMovies from './components/genreMovies/GenreMovies.component';
import AboutMe from './components/AboutMe.component';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderContainer />
        <div className="App">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/aboutMe' element={ <AboutMe/>} />
          <Route path='details/:type/:detailsID' element={<MovieDetails />} />
          <Route path='genre/:genreName/:genreID' element={<GenreMovies />} />
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
