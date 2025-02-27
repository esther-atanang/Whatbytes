import React from 'react'

const page = () => {
  return (
    <section className='p-6'>
      <h1 className='capitalize text-gray-500 font-medium mb-6'>internship</h1>
      <div>
        <p className='text-2xl'>Frontend Developer Intern (Remote) <span className='text-sm text-gray-400'>₹10,000 – ₹20,000 • No equity</span></p>
      </div>
      <section className='p-4 sm:p-8 flex flex-col md:flex-row gap-5'>
        <div>
          <h3 className='text-2xl'>Role and Responsibilities:</h3>
          <p className='mb-3'>As a Front End Developer Intern, you will:</p>
          <ol className='list-disc'>
            <li>Collaborate with our development team to create user-friendly web applications.</li>
            <li>Implement designs and features using React and Tailwind CSS.</li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>Optimise applications for maximum speed and scalability.</li>
            <li>Participate in code reviews and contribute to a high standard of code quality.</li>
            <li>Troubleshoot and debug issues to improve overall performance.</li>
            <li>Stay up-to-date with the latest industry trends and technologies.</li>
          </ol>
        </div>

        <div>
          <h3 className='text-2xl mb-3'>What we Offer</h3>
          <ol className='list-disc'>
            <li>Hands-on experience with real-world projects.</li>
            <li>Mentorship and guidance from experienced developers.</li>
            <li>Flexible work hours and remote work environment.</li>
            <li>Opportunity to grow and potentially transition to a full-time role.</li>
          </ol>
        </div>
      </section>
    </section>
  )
}

export default page;
