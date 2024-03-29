import Link from 'next/link';

export default function Home() {
   return (
      <main className='flex h-[calc(100vh-90px)] flex-col items-center justify-between px-10 py-20 md:p-24'>
         <div>
            <h1 className='text-2xl md:text-4xl text-center'>
               Next 13 App Router Fetching PoC
            </h1>
            <h2 className='font-light text-sm md:text-lg text-center text-gray-800 dark:text-gray-300 mt-2'>
               <a
                  href='https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Data Fetching, Caching, and Revalidating
               </a>
            </h2>
         </div>
         <div className='mb-32 mt-4 gap-y-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
            <Link
               href='/static'
               className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            >
               <h2 className={`mb-3 text-2xl font-semibold text-blue-500`}>
                  Static
                  <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  This page does the fetch only once at build time and the
                  content is never updated until the next build.
               </p>
            </Link>

            <Link
               href='/server-side'
               className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            >
               <h2 className={`mb-3 text-2xl font-semibold text-green-600`}>
                  Server Side
                  <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  This page does the fetch for each request. The content is
                  updated every time the page is reloaded.
               </p>
            </Link>

            <Link
               href='/isr'
               className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            >
               <h2 className={`mb-3 text-2xl font-semibold text-red-500`}>
                  ISR
                  <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                     -&gt;
                  </span>
               </h2>
               <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  This page does the fetch at the time of build and the content
                  is updated every 15 seconds.
               </p>
            </Link>
         </div>
      </main>
   );
}
