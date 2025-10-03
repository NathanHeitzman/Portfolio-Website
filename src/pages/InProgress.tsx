import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "../assets/styles/InProgress.module.css"

function InProgress() {
    return (
        <>
            <Navbar/>
            <div className="pagebody">
                <div className="progressMessage">
                    <p> Page still under construction, expect updates shortly!</p>
                    <img src="../images/wrench.png" alt="An icon to show that the page is under construction"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default InProgress;