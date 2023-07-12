import './App.css';
import ContactForm from './components/ContactForm';
import Title from './components/Title';

function App() {
  return (
    <div className="site-wrapper">
      <div className="container">
        <Title />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
