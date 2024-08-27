import Content from './Content';
import Header from './Header';
import Nav from './Nav';
import Stepper from './Stepper';

function App() {
  return (
    <div className='flex'>
      <Nav />
      <div className='flex flex-col flex-1'>
        <Header />
        <main className='flex flex-1'>
          <Stepper />
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
