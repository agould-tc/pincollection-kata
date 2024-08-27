import logo from './logo.svg';

export default function Header() {
  return (
    <header className='flex items-center justify-center text-[calc(10px_+_2vmin)]'>
      <img
        src={logo}
        className='h-10 pointer-events-none motion-safe:animate-spin-slow'
        alt='logo'
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}
