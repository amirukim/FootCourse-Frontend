import React from "react";

function Footer() {
  return (
    <footer className='m-2 md:m-8 p-4 w-auto mt-auto bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='https://flowbite.com/' className='flex items-center mb-4 sm:mb-0'>
          <span className='self-center text-2xl font-monsterrat font-semibold whitespace-nowrap dark:text-white'>FootCourse</span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a href='#' className='mr-4 font-monsterrat hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 font-monsterrat hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 font-monsterrat hover:underline md:mr-6 '>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm font-monsterrat text-gray-500 sm:text-center dark:text-gray-400'>
        ©
        <a href='https://flowbite.com/' className='hover:underline'>
          FootCourse™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
