const Summary = ({ selectPlan, addOns, isMonthly, setCurrentStep }) => {
  const planPrice = isMonthly
    ? selectPlan.price.monthly
    : selectPlan.price.yearly;
  const paymentInterval = isMonthly ? 'mo' : 'yr';

  const addOnPrices = addOns.map((addOn) =>
    isMonthly ? addOn.price.monthly : addOn.price.yearly
  );

  const totalAddOnPrices = addOnPrices.reduce((sum, price) => sum + price, 0);

  const total = totalAddOnPrices + planPrice;

  const handleClick = () => setCurrentStep(2);

  return (
    <>
      <div className="  bg-pureWhite py-8 px-5 rounded-xl md:rounded-none mt-10 md:mt-0 md:p-0 md:w-full">
        <div className="title">
          <h1 className="text-marineBlue font-bold text-3xl">Finishing up</h1>

          <p className="text-xl my-3 text-coolGray">
            Double-check everything looks OK before confirming
          </p>
        </div>
        <div className=" flex flex-col my-6 gap-4  justify-between bg-alabaster p-4 rounded-xl">
          <div className="plan text-xl flex w-full justify-between border-b-2 pb-2">
            <div>
              <h3 className="text-marineBlue font-bold">{selectPlan.name}</h3>
              <p
                onClick={handleClick}
                className="text-coolGray underline cursor-pointer"
              >
                Change
              </p>
            </div>
            <p className="text-marineBlue font-bold">
              +$
              {planPrice}/ {paymentInterval}
            </p>
          </div>
          <div className="addOns flex flex-col gap-4">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className="addOn flex justify-between text-xl"
              >
                <p className="text-coolGray">{addOn.name}</p>
                <p className="text-marineBlue">
                  +$
                  {`${isMonthly ? addOn.price.monthly : addOn.price.yearly}`}/
                  {paymentInterval}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="total flex justify-between text-xl">
          <p className="text-coolGray">
            {`Total (per ${isMonthly ? 'month' : 'year'})`}
          </p>
          <p className="text-purplishBlue font-bold">
            +${total}/{paymentInterval}
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
