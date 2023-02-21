
import React from 'react';

const Navbar = () =>{
    return(



<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <h1 className='text-2xl font-bold mr-4 sm:text-3xl text-mysticRed'>Digi<span className='text-onyx'>ency</span></h1>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-mysticRed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-mysticRed bg-text-mysticRed rounded md:bg-transparent md:text-text-mysticRed md:p-0 dark:text-mysticRed" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-onyx rounded hover:bg-text-onyx md:hover:bg-transparent md:hover:text-text-onyx md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
      </li>

    </ul>
  </div>
  </div>
</nav>

    )
}

export default Navbar