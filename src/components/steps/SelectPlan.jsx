import arcadeIcon from '../../assets/images/icon-arcade.svg';
import advancedIcon from '../../assets/images/icon-advanced.svg';
import proIcon from '../../assets/images/icon-pro.svg';

const SelectPlan = ({
  isMonthly,
  setIsMonthly,
  selectPlan,
  setSelectPlan,
  errors,
}) => {
  const plans = [
    {
      id: 1,
      name: 'Arcade',
      price: { monthly: 9, yearly: 90 },
      icon: arcadeIcon,
    },
    {
      id: 2,
      name: 'Advanced',
      price: { monthly: 12, yearly: 120 },
      icon: advancedIcon,
    },
    {
      id: 3,
      name: 'Pro',
      price: { monthly: 15, yearly: 150 },
      icon: proIcon,
    },
  ];

  const toggleBilling = () => setIsMonthly(!isMonthly);

  const handleClick = (plan) => {
    setSelectPlan(plan);
  };

  return (
    <>
      <div className="  bg-pureWhite py-8 px-5 rounded-xl md:rounded-none mt-10 md:mt-0 md:p-0">
        <div className="title mb-8">
          <h1 className="text-marineBlue font-bold text-3xl">
            Select your plan
          </h1>

          <p className="text-xl my-3 text-coolGray">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div
          role="radiogroup"
          className="plan-wrapper flex flex-col gap-2 md:grid md:grid-cols-3"
        >
          {plans.map((plan) => {
            const isSelected = selectPlan?.id === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => handleClick(plan)}
                role="radio"
                aria-checked={isSelected}
                tabIndex={0}
                className={`flex md:flex-col md:gap-8 gap-4 border p-4 rounded-xl ${
                  isSelected ? 'border-marineBlue bg-alabaster' : ''
                }`}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(plan)}
              >
                <div>
                  <img src={plan.icon} alt={plan.name} />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="text-marineBlue font-bold text-xl">
                    {plan.name}
                  </h3>
                  <p className="text-lg text-coolGray">
                    ${isMonthly ? plan.price.monthly : plan.price.yearly}/mo
                  </p>
                  <p
                    className={`${
                      !isMonthly ? 'block' : 'hidden'
                    } text-marineBlue text-lg md:text-sm`}
                  >
                    2 months free
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="flex justify-center rounded-lg bg-alabaster mt-3 p-3 items-center hover:cursor-pointer"
          role="switch"
          aria-checked={isMonthly}
          onClick={toggleBilling}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleBilling()}
          aria-label="Toggle billing type"
        >
          <p
            className={`${
              isMonthly ? 'text-marineBlue' : `text-coolGray`
            } text-base`}
          >
            Monthly
          </p>
          <div
            className={`${
              isMonthly ? 'justify-start' : 'justify-end'
            } bg-marineBlue px-1 py-2 w-8 h-4 mx-2 rounded-lg flex  items-center transition-all duration-300`}
          >
            <div className="w-3 h-3 bg-pureWhite rounded-full"></div>
          </div>
          <p className={`${!isMonthly ? 'text-marineBlue' : `text-coolGray`}`}>
            Yearly
          </p>
        </div>
        {errors.selectPlan && (
          <p className="text-red-500 text-sm mt-2">{errors.selectPlan}</p>
        )}
      </div>
    </>
  );
};

export default SelectPlan;
