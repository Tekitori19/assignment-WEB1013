import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import Posts from '../../components/Posts/Posts'
import "./Home.css"
import UrlProvider from '../../providers/UrlProvider'

const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
            <UrlProvider>
              <Posts/>
            </UrlProvider>
            <SideBar/>
        </div>
    </>
  )
}

export default Home