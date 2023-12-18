import React from 'react';
import './App.css';
import NewsCategories from "./components/news-categories.jsx";
import LastNews from "./components/last-news";
import Currency from "./components/currency";
import SearchCategories from "./components/search-categories.jsx";
import Search from "./components/search";
import Banner from "./components/banner";
import Interesting from "./components/interesting";
import Logo from './components/logo.jsx';

function App() {
  return (
    <div className='container'>
        <div className='news'>
            < NewsCategories />
            < LastNews />
            < Currency />
        </div>
        <div className='search'>
            <SearchCategories />
            <Search />
            <Logo/>
        </div>
        <div className='banner'>
            <Banner />
        </div>
        <div className='footer'>
            <Interesting />
        </div>
    </div>
  );
}

export default App;

