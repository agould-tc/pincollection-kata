import logo from './logo.svg';

function App() {
  return (
    <main className='text-center'>
      <header className='bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-white'>
        <img
          src={logo}
          className='h-[40vmin] pointer-events-none motion-safe:animate-spin-slow'
          alt='logo'
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='text-white'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
