import './home.scss'
import Fetured from '../components/fetured/Fetured';
import Menu from '../components/nav/Menu';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Menu/>
            <Fetured/>
           
        </div>
    );
};

export default Home;