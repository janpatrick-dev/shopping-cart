import './Home.css';
import Header from '../../components/header/Header';
import HeroImage from '../../images/hero-img.jpg';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className='home-content'>
        <div className='home-content-left'>
          <h1>God of War</h1>
          <p>Now available!</p>
          <a href='/shop'><button>Shop</button></a>
        </div>
        <div className='home-content-right'>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;