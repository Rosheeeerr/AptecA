import Header from "../First_page/Header/Header.jsx"
import Stock from "../First_page/Stock/Stock.jsx"
import How from "../First_page/How/How.jsx"
import Works from "../First_page/Works/Works.jsx"
import About from "../First_page/about/about.jsx"
import Footer from "../Repet_components/Footer/Footer.jsx"
export default function FirstPage(){
    return(
        <>
            <Header/>
            <Stock/>
            <How/>
            <Works/>
            <About/>
            <Footer/>
        </>
    )
}