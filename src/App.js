import logo from '../src/logo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#22e3a9"}}>
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="40px" height="40px" style={{border: '1px solid black',borderRadius: 5 + 'px',marginLeft:'10px'}}/>
          Fruits
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className="right-aligned">
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
            <NavDropdown title="Groups" renderMenuOnMount={true}>
              <NavDropdown.Item href="#groups/apple">Apple</NavDropdown.Item>
              <NavDropdown.Item href="#groups/mango">Mango</NavDropdown.Item>
              <NavDropdown.Item href="#groups/orange">Orange</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/dryfruits">Dry Fruits</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content"  style={{textAlign:'justify',marginTop:'40px'}}>
          <h1 style={{textAlign:'center',marginBottom:'40px',color:'white'}}><u>FRUITS AND SOME QUESTIONS RELATED TO IT</u></h1>
        <b>1.What do fruits contain?</b><br/>
          Fruits and vegetables contain many vitamins and minerals that are good for your health.
          These include vitamins A (beta-carotene), C and E, magnesium, zinc, 
          phosphorous and folic acid. Folic acid may reduce blood levels of homocysteine, a substance that may be a risk factor for coronary heart disease.
        <br/>
        <b>2.What are the benefits of eating fruits?</b><br/>
        Nutrients. Dietary fiber from fruits, as part of an overall healthy diet, helps reduce blood cholesterol levels and may lower risk of heart disease.
        Fiber is important for proper bowel function. Whole or cut-up fruits are sources of dietary fiber; fruit juices contain little or no fiber.
        <br/>
        <b>3.What fruit should I eat everyday?</b><br/>
        Of all fruit, berries tend to be the lowest in carbs. So if you're counting carbs, blackberries, raspberries, blueberries and strawberries are all excellent choices.
        At the end of the day, fruits are very nutritious, 
        but they don't contain any essential nutrients that you can't get from other foods, like vegetables.
        <br/>
        <b>4.Which fruit is best for blood?</b><br/>
        Citrus fruits like oranges, lemons and grapefruit are packed with antioxidants, including flavonoids. Consuming flavonoid-rich citrus fruits may decrease inflammation
        in your body, which can reduce blood pressure and stiffness in your arteries while improving blood flow and nitric oxide production ( 26 ).
        <br/>
        <b>5.What happens when you eat fruits everyday?</b><br/>
        Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber.
        Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;