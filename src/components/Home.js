import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const Home = props => {
  const { user } = props;

  const logged = [];
  if (user.logged) {
    logged.push(['/account', 'Account']);
    logged.push(['/how-to-schedule', 'Schedule a class']);
  } else {
    logged.push(['/login', 'Login']);
    logged.push(['/signup', 'Signup']);
  }

  return (
    <div className="home">
      <h1 className="home-tittle">Welcome to Flying School</h1>
      <img src="./contents/img_3.jpeg" alt="Berk" className="berk-image" />
      <h2 className="home-tittle">&quot;Life here is amazing. Touch the Sky.&quot;</h2>
      <h2 className="home-tittle">And now we have  world best Flying Academy</h2>
      <div className="home-inst-button-container">
        <Link to="/instructors" className="home-inst-button">
          <button type="button" className="home-buttons">
            <p className="button-name">Our Instructors</p>
            <img src="./contents/img_4.png" alt="Instructors" className="home-images" />
          </button>
        </Link>
        <div className="home-login-buttons">
          <Link to={logged[0][0]}>
            <button type="button" className="home-buttons home-login-button">
              <p className="button-name">{logged[0][1]}</p>
              <img src="/contents/img_5.jpeg" alt="Login" className="home-images" />
            </button>
          </Link>
          <Link to={logged[1][0]}>
            <button type="button" className="home-buttons home-signup-button">
              <p className="button-name">{logged[1][1]}</p>
              <img src="/contents/img_6.jpeg" alt="Signup" className="home-images" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    logged: PropTypes.bool,
  }).isRequired,
};

export default Home;
