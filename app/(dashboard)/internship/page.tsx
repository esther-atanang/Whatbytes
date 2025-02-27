import { COMPANY_OFFER_TITLE, COMPANY_OFFERS, INTERN_PAY, INTERN_ROLE_DESC, INTERN_ROLE_TITLE, INTERN_ROLES, INTERNSHIP_ROLE } from '@/lib/constants';
import React from 'react'

const page = () => {
  return (
    <section className='p-6'>
      <h1 className='capitalize text-gray-500 font-medium mb-6'>internship</h1>
      <div>
        <p className='text-2xl'>{INTERNSHIP_ROLE}<span className='text-sm text-gray-400'>{INTERN_PAY}</span></p>
      </div>
      <section className='p-4 sm:p-8 flex flex-col md:flex-row gap-5'>
        <div>
          <h3 className='text-2xl'>{INTERN_ROLE_TITLE}</h3>
          <p className='mb-3'>{INTERN_ROLE_DESC}</p>
          <ol className='list-disc'>
            {INTERN_ROLES.map((value) => <li key={value}>{value}</li>)}
          </ol>
        </div>

        <div>
          <h3 className='text-2xl mb-3'>{COMPANY_OFFER_TITLE}</h3>
          <ol className='list-disc'>
            {COMPANY_OFFERS.map((value) => <li key={value}>{value}</li>)}
          </ol>
        </div>
      </section>
    </section>
  )
}

export default page;
