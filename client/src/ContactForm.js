import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [occupation, setOccupation] = useState('');
  const [availability, setAvailability] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to a SQL database using fetch
      await fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          address,
          department,
          occupation,
          availability,
        })
      });
  
      // Send an email with the form data to the user's email address
      await fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phonenumber,
          address,
          department,
          occupation,
          availability,
        })
      });
  
      alert('Form submitted successfully!');
    } catch (error) {
      alert('An error occurred while submitting the form. Please try again later.');
      console.error(error);
    }
  };
  

  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Kindly take your time to fill this form.</p>
      <form onSubmit={handleSubmit} class="space-y-8">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          <input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input type="text" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
          <input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Phone Number" required value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
          <input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department <span className='text-gray-500'>(leadership)</span></label>
          <input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <div>
          <label for="occupation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Occupation</label>
          <input type="text" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Occupation" required value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>
        <div className='flex items-center'>
          <label for="availability" class="text-sm font-medium text-gray-900 dark:text-gray-300">Availability</label>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mx-6" checked={availability} onChange={(e) => setAvailability(e.target.checked)} />
        </div>
        <div className='flex items-center justify-center'>
          <button type="submit" class="block p-3 w-full py-3 px-[50%] text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send</button>
        </div>
      </form>
  </div>
</section>
  );
}

export default ContactForm;
