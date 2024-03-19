import { useState } from 'react';
import { organBank_backend } from 'declarations/organBank_backend';
import Navbar from './components/Navbar'
import Home from './pages/Home';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    organBank_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
