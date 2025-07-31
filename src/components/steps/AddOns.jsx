const AddOns = ({ isMonthly, addOns, setAddOns }) => {
  const selectAddOns = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: { monthly: 1, yearly: 10 },
      bill: { monthly: 'mo', yearly: 'yr' },
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: { monthly: 2, yearly: 20 },
      bill: { monthly: 'mo', yearly: 'yr' },
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: { monthly: 2, yearly: 20 },
      bill: { monthly: 'mo', yearly: 'yr' },
    },
  ];

  const handleChange = (addOn) => {
    const isSelected = addOns.some((item) => item.id === addOn.id);
    if (isSelected) {
      setAddOns(addOns.filter((item) => item.id !== addOn.id));
    } else {
      setAddOns([...addOns, addOn]);
    }
  };

  return (
    <>
      <div className="  bg-pureWhite py-8 px-5 rounded-xl md:rounded-none mt-10 md:mt-0 md:p-0 md:w-full">
        <div className="title">
          <h1 className="text-marineBlue font-bold text-3xl">Pick add-ons</h1>

          <p className="text-xl my-3 text-coolGray">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div role="listbox" className="addOn-wrapper flex flex-col gap-4 ">
          {selectAddOns.map((addOn) => {
            const isChecked = addOns.some((item) => item.id === addOn.id);
            return (
              <label
                htmlFor={addOn.name}
                key={addOn.id}
                className={`flex justify-between items-center border p-3 rounded-xl gap-2  ${
                  isChecked ? 'border-marineBlue bg-alabaster' : ''
                } `}
              >
                <div className="info flex gap-4">
                  <input
                    type="checkbox"
                    name={addOn.name}
                    id={addOn.name}
                    checked={isChecked}
                    tabIndex={0}
                    onChange={() => {
                      handleChange(addOn);
                    }}
                    className="w-4"
                  />
                  <div>
                    <h3 className="text-marineBlue text-lg font-semibold">
                      {addOn.name}
                    </h3>
                    <p className="text-coolGray">{addOn.description}</p>
                  </div>
                </div>
                <div className="price">
                  <p className="text-purplishBlue">
                    +$
                    {`${isMonthly ? addOn.price.monthly : addOn.price.yearly}`}/
                    {isMonthly ? addOn.bill.monthly : addOn.bill.yearly}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddOns;
