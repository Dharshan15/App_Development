import TopBar from './TopBar';
import '../css/Home.css'
import black from '../images/black.jpg'
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <TopBar/>
    
    <div className='homepage'>
    <div className='homeTitle'>One place to manage all your projects</div>
    <div class="gamelist">
              <div class="gamecon">
                  <img class="gameimg"src={black} alt="Whack A Mole"/>
                  <h3 className='h3game'>99</h3>
                  <p class="subtextgame">Projects Completed</p>
              </div>
              
                <div class="gamecon">
                    <img class="gameimg"src={black} alt="Gravity"/>
                    <h3 className='h3game'>3</h3>
                    <p class="subtextgame">Projects Assigned</p>
                </div>

                <div class="gamecon">
                    <img class="gameimg"src={black} alt="Gravity"/>
                    <h3 className='h3game'>2</h3>
                    <p class="subtextgame">Projects Pending</p>
                </div>
            
        </div>
        </div>
      <Footer/>
    </>
  )
}

export default Home;

