import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SmallBanner from './components/SmallBanner';
import GroupSearch from './components/GroupSearch';
import MainSearch from './components/MainSearch';
import MainBanner from './components/MainBanner';



const App = () => {
  return (
    <Router>
    	<AppRouter/>
    </Router>


  );

}

export default App;
