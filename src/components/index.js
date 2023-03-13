import {lazy} from 'react'
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Team from "./Team/Team"
import Contact from "./Contact/Contact"
import Home from './Home'
import BDS from './BDS/BDS'

const Events = lazy(() => import('./Events/Events'));
const IntelliaTeam = lazy(() => import('./Team/Intellia_Team'));

export {Navbar,Footer,Team,Home,Events, Contact,BDS,IntelliaTeam}