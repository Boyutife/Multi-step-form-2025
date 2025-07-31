const StepFooter = ({
  currentStep,
  setCurrentStep,
  formData,
  setErrors,
  selectPlan,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === 4;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNext = () => {
    // Validate step : Personal info
    const newErrors = {};

    switch (currentStep) {
      case 1:
        if (formData.name.trim() === '') {
          newErrors.name = 'This field is required';
        }

        if (formData.email.trim() === '') {
          newErrors.email = 'This field is required';
        } else if (!emailRegex.test(formData.email.trim())) {
          newErrors.email = 'Please enter a valid email';
        }

        if (formData.phone.trim() === '') {
          newErrors.phone = 'This field is required';
        }
        break;

      case 2:
        if (!selectPlan.id) {
          newErrors.selectPlan = 'Please select a plan to continue';
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);

    if (!hasErrors) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div
      className={`flex ${
        isFirstStep ? 'justify-end' : 'justify-between'
      } w-full`}
    >
      {!isFirstStep && (
        <>
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className=" text-coolGray px-6 py-2"
          >
            Go Back
          </button>
          <button
            onClick={handleNext}
            className="bg-marineBlue text-pureWhite px-6 py-2 rounded"
          >
            {isLastStep ? 'Confirm' : 'Next Step'}
          </button>
        </>
      )}
      {isFirstStep && (
        <button
          onClick={handleNext}
          className="bg-marineBlue text-pureWhite px-6 py-2 rounded"
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default StepFooter;
