import React from 'react';
import About from './components/About';
import coverImage from "../../assets/cover/cover-image.jpg";
import './App.css';

const categories = [
  {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  },
  { name: "portraits", description: "Portraits of people in my life" },
  { name: "food", description: "Delicious delicacies" },
  {
    name: "landscape",
    description: "Fields, farmhouses, waterfalls, and the beauty of nature",
  },
];

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
};

function Nav() {

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={categorySelected} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function categorySelected() {
  console.log("hello")
}

export default Nav;
export default App;
