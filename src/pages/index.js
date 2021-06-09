import React, {useState} from 'react'
import Contact from '../components/contact'
import Hero from '../components/hero'
import Info from '../components/InfoSection'
import { aboutObj, storeObj, gardenObj } from '../components/InfoSection/Data'
import { contactObj } from '../components/contact/Data'
import Navbar from '../components/navbar'
import Sidebar from '../components/Sidebar'
import { SliderData } from '../data/SliderData.js'
import Footer from '../components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero slides={SliderData}/>
            <Info {...aboutObj}/>
            <Info {...storeObj}/>
            <Info {...gardenObj}/>
            <Contact {...contactObj}/>
            <Footer />
        </>
    )
}

export default Home
