import { CheckCircleIcon } from '@heroicons/react/20/solid';

export default function Stepper() {
  return (
    <section className='border-r border-[#e6e6e6] w-52'>
      <div className='flex flex-col gap-2 px-4 py-12'>
        <img className='w-48 p-8 blur-sm' src='logo512.png' alt='React Logo' />
        <nav
          className='flex justify-around overflow-hidden'
          aria-label='Progress'
        >
          <ol className='space-y-6'>
            <li key={0} className='blur-sm'>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <CheckCircleIcon
                    className='h-full w-full text-[#251aff]'
                    aria-hidden='true'
                  />
                </span>
                <span className='ml-3 text-sm font-medium w-36 text-ellipsis overflow-hidden text-nowrap'>
                  Device Collection
                </span>
              </div>
            </li>
            <li key={1}>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <span className='absolute h-4 w-4 rounded-full bg-[#e6efff]' />
                  <span className='relative block h-2 w-2 rounded-full bg-[#251aff]' />
                </span>
                <span className='ml-3 text-sm font-medium text-[#251aff] w-36 text-ellipsis overflow-hidden text-nowrap'>
                  Pin Collection
                </span>
              </div>
            </li>
            <li key={2} className='blur-sm'>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <span className='relative block h-2 w-2 rounded-full bg-[#e6efff]' />
                </span>
                <span className='ml-3 text-sm font-medium w-36 text-ellipsis overflow-hidden text-nowrap'>
                  ID Verification
                </span>
              </div>
            </li>
            <li key={3} className='blur-sm'>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <span className='relative block h-2 w-2 rounded-full bg-[#e6efff]' />
                </span>
                <span className='ml-3 text-sm font-medium w-36 text-ellipsis overflow-hidden text-nowrap'>
                  Plan Selection
                </span>
              </div>
            </li>
            <li key={4} className='blur-sm'>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <span className='relative block h-2 w-2 rounded-full bg-[#e6efff]' />
                </span>
                <span className='ml-3 text-sm font-medium w-36 text-ellipsis overflow-hidden text-nowrap'>
                  Phone Number
                </span>
              </div>
            </li>
            <li key={5} className='blur-sm'>
              <div className='flex items-center' aria-current='step'>
                <span
                  className='relative flex h-5 w-5 flex-shrink-0 items-center justify-center'
                  aria-hidden='true'
                >
                  <span className='relative block h-2 w-2 rounded-full bg-[#e6efff]' />
                </span>
                <span className='ml-3 text-sm font-medium w-36 text-ellipsis overflow-hidden text-nowrap'>
                  Line Summary
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
