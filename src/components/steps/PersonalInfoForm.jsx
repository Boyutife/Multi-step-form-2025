import { useState } from 'react';

const PersonalInfoForm = ({ formData, setFormData, errors }) => {
  const inputFields = [
    {
      index: '1',
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'e.g. Stephen King',
      label: 'Name',
    },
    {
      index: '2',
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'e.g. stephenking@email.com',
      label: 'Email',
    },
    {
      index: '3',
      id: 'phone',
      name: 'phone',
      type: 'number',
      placeholder: 'e.g. e.g. +1 234 567 890',
      label: 'Phone',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="container  bg-pureWhite py-8 px-4 rounded-xl md:rounded-none md:p-0">
        <h1 className="text-marineBlue font-bold text-3xl"> Personal info</h1>
        <h2 className="text-xl my-3 text-coolGray">
          Please provide your name, email address, and phone number.
        </h2>
        <form action="" className="flex flex-col gap-8">
          {inputFields.map((input) => (
            <div key={input.index} className="flex flex-col-reverse gap-1">
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                className={`w-full border rounded-md pl-4 py-2 text-lg ${
                  errors[input.name] ? 'border-strawberryRed' : ''
                }`}
                required
                value={formData[input.name]}
                onChange={handleChange}
              />
              <div className="flex justify-between">
                <label htmlFor={input.id} className="text-marineBlue">
                  {input.label}
                </label>
                <span
                  className={` text-sm text-strawberryRed ${
                    errors[input.name] ? 'block' : 'hidden'
                  }`}
                >
                  {errors[input.name]}
                </span>
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default PersonalInfoForm;
