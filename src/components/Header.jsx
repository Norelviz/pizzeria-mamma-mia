import headerImage from '../assets/Header.jpg'; // o .png si tu imagen tiene esa extensión

const Header = () => {
  const styles = {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ), url(${headerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
  };

  return (
    <header className="py-5" style={styles}>
      <div className="container text-center">
        <h1 className="display-5 fw-bold text-shadow">¡Pizzería Mamma Mía!</h1>
        <p className="lead mb-0 text-shadow">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;
