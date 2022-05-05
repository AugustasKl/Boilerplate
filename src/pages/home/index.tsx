// import {Header} from 'components'
import Header from 'components/layout/Header/Header';
import React from 'react';
import Categories from './sections/Categories';
import Chef from './sections/Chef';
import Footer from '../../components/layout/footer/Footer';
import Recipes from './sections/Recipes';
import Subscription from './sections/Subscription';
import Hero from './sections/Hero';



const Home: React.FC = () => (
	<>
	<Header/>
	<Hero/>
	<Categories/>
	<Recipes/>
	<Chef/>
	<Subscription/>
	<Footer/>
	</>
	
)

export default Home;
//nesuprantu Categories error
// prideti sitas missing attributes? id={0} title={''} background={''}(cia pats TS imeta jas)