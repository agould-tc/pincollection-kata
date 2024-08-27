import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Header() {
  return (
    <header className='flex w-[calc(w-screen-64px)] h-12 border-b border-[#e6e6e6] content-center px-5'>
      <Balance />
      <div className='border-r w-2 h-3/5 mx-4 self-center' />
      <RecentOrders />
    </header>
  );
}

function Balance() {
  return (
    <button className='p-2 font-semibold text-sm blur-sm'>
      Balance $2,713.78{' '}
      <ChevronDownIcon className='ml-1 inline w-5 h-5 text-[#251aff]' />
    </button>
  );
}

function RecentOrders() {
  return (
    <button className='p-2 font-semibold text-sm  blur-sm'>
      Recent Orders
      <span className='px-2 py-1 rounded ml-3 bg-[#e6efff] border border-[#251aff]'>
        55
      </span>
    </button>
  );
}
