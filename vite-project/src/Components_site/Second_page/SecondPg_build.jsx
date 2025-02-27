import './SecondPg.scss'
import Nav from '../Repet_components/Nav/Nav'
import Search from '../First_page/Search_alpha/Search.jsx';
import Footer from '../Repet_components/Footer/Footer.jsx';
export default function Second(){
    return(
        <>
        <div className="general_container_secondpg">
            <Nav/>
            <Search/>
        </div>
        </>
    )
}