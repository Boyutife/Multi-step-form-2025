const Nav = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'YOUR INFO' },
    { number: 2, label: 'SELECT PLAN' },
    { number: 3, label: 'ADD-ONS' },
    { number: 4, label: 'SUMMARY' },
  ];
  return (
    <>
      <div className="flex gap-4 text-pureWhite md:flex-col md:gap-6">
        {steps.map((step) => (
          <div key={step.number} className="md:grid md:grid-cols-30-70">
            <div>
              <div
                className={`h-5 w-5 rounded-[50%] border-2 border-pureWhite flex items-center justify-center p-4 font-bold ${
                  currentStep === step.number
                    ? 'active'
                    : 'border-2 border-pureWhite'
                }`}
              >
                {step.number}
              </div>
            </div>
            <div className="hidden md:flex md:flex-col">
              <span className="text-sm text-lightGray">
                STEP {step.number}{' '}
              </span>
              <span className="">{step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
