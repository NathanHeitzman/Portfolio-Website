import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeadShot from '../assets/images/nathan2.jpg'
import Button from '../components/Button'
import '../assets/styles/Home.css'

const Homepage = () => {
    return(
      <>
        <Navbar />
          <div className='page-body d-flex justify-content-center align-items-center'>
            <div className='row w-100 container'>
              <div className='image-column col-12 col-md-6 order-md-2'>
                <img src={HeadShot} className='my-headshot img-fluid'></img>
              </div>
  
              <div className='text-column col-12 col-md-6 order-md-1'>
                <h1 className='mb-0'>Hey there!</h1>
                <h2>I'm <span>Nathan Heitzman</span></h2>
                <h2>A Computer Science Student</h2>
                <br></br>
                <Button text="Lets Build Something Together!" />
              </div>
            </div>
          </div>
        <Footer />
      </>
    )
}
export default Homepage;