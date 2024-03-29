import ListCountries from '@/app/components/ListCountries';
import RevalidateButton from '@/app/components/RevalidateButton';
import TitlePage from '@/app/components/TitlePage';

async function getData() {
   const res = await fetch(
      'https://next-isr-poc-server-api.vercel.app/country',
      { next: { revalidate: 30 } } // Time revalidation 30 seconds
   );

   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   return res.json();
}

export default async function ISR() {
   const countriesISR = await getData();

   return (
      <main className='flex h-[calc(100vh-90px)] flex-col items-center justify-between px-10 py-10 md:p-24'>
         <div>
            <TitlePage
               title='ISR Time-based Revalidation'
               subtitle='This page does the fetch at the time of build and the content
               will be updated every 15 seconds.'
               urlExampleGitHub='https://github.com/larturi/nextjs-v13-app-router-fetching-isr-poc/blob/1443140b8af367ced49f920216f139be4e7eaafe/app/(pages)/isr/page.tsx#L5-L16'
               underlineColor='border-red-500 border-b-4'
               underlineWidth='w-[130px] md:w-[280px]'
            />

            <div className='flex justify-center'>
               <RevalidateButton text='Revalidate Now!' />
            </div>
            <ListCountries countries={countriesISR} color='text-red-500' />
         </div>
      </main>
   );
}
