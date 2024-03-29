import ListCountries from '@/app/components/ListCountries';
import TitlePage from '@/app/components/TitlePage';

async function getData() {
   const res = await fetch(
      'https://next-isr-poc-server-api.vercel.app/country'
   );

   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   return res.json();
}

export default async function Static() {
   const countries = await getData();

   return (
      <main className='flex h-[calc(100vh-90px)] flex-col items-center justify-between px-10 py-10 md:p-24'>
         <div>
            <TitlePage
               title='Static Page'
               subtitle='This page does the fetch only once at build time and the content
               is never updated until the next build.'
               urlExampleGitHub='https://github.com/larturi/nextjs-v13-app-router-fetching-isr-poc/blob/1443140b8af367ced49f920216f139be4e7eaafe/app/(pages)/static/page.tsx#L4-L14'
               underlineColor='border-blue-500 border-b-4'
               underlineWidth='w-[140px] md:w-[150px]'
            />

            <ListCountries countries={countries} color='text-blue-600' />
         </div>
      </main>
   );
}
