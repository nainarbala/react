import './App.css'
import Course from './Course';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <main className="course-list">
        <Course title="HTML" price="199" theme="html-banner" />
        <Course title="CSS" price="199" theme="css-banner" />
        <Course title="JS" theme="js-banner" />
      </main>

      {/* <Footer></Footer> */}

    </>
  );
}

export default App
