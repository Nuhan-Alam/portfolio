import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
    budgetRange: '< $1,000'
  });

  const budgetOptions = [
    '< $500',
    '$500 - $1000',
    '$1,000 - $2,000',
    '$2,000 - $5,000',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className='max-w-4xl ml-auto'>
                <div className="text-white mb-4 flex items-center gap-2">
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-white"></span>
            </span>
            <span className="text-lg">Projects</span>
          </div>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-medium text-white mb-2">
          Contact For Work
        </h1>

        
        <div className="w-full p-2 md:p-6 space-y-6">
          {/* Email + Phone */}
          <div className='flex flex-col md:flex-row space-y-2 gap-2'>
          {/* Email Field */}
          <div className="w-full md:w-1/3">
            <label className="text text-white block">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter the Email"
              required
              maxLength={400}
              className="w-full  px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="w-full md:w-1/3">
            <label className="text text-white block">Your Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              maxLength={400}
              className="w-full  px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
        </div>
          

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-white block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              maxLength={2000}
              className="w-full md:w-2/3 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors resize-none"
            />
          </div>

          {/* Budget Range */}
          <div className="space-y-4">
            <label className="text-sm text-white block">Budget Range</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {budgetOptions.map((option) => (
                <label
                  key={option}
                  className={`flex w-full  items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    formData.budgetRange === option
                      ? 'bg-white text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="budgetRange"
                    value={option}
                    checked={formData.budgetRange === option}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-gray-600"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-start pt-4">
            <button
              onClick={handleSubmit}
              className="w-auto flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-white text-white hover:text-black rounded-full transition-colors group"
            >
              <span className="text-lg font-medium">Submit</span>

            </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default ContactForm;