import './assets/styles/App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeadShot from './assets/images/nathan2.jpg'

function App() {
  return(
    <>
    <NavBar />
      <div className='page-body d-flex justify-content-center align-items-center'>
        <div className='row w-100 container'>
          <div className='image-column col-12 col-md-6 order-md-2'>
            <img src={HeadShot} className='my-headshot img-fluid'></img>
          </div>
          
          <div className='text-column col-12 col-md-6 order-md-1'>
              <h1 className='mb-0'>Hey there!</h1>
              <h2>I'm <span>Nathan Heitzman</span></h2>
              <h2>A Computer Science Student</h2>
              <button>Lets Build Something Together!</button>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default App
