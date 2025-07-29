import { useState } from 'react';
import Nav from './Nav';
import StepFooter from './StepFooter';
import PersonalInfoForm from './steps/PersonalInfoForm';
import AddOns from './steps/AddOns';
import SelectPlan from './steps/SelectPlan';
import Summary from './steps/Summary';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      default:
        return <PersonalInfoForm />;
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  return (
    <div className="container relative min-h-screen font-ubuntu bg-magnolia  md:flex md:justify-center md:items-center">
      {/* Background Image for Mobile */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-mobile-sidebar bg-no-repeat bg-cover z-0 md:hidden" />

      {/* Foreground Content */}
      <div className=" container relative z-10 flex flex-col items-center sm:min-h-screen pt-10 md:grid md:bg-pureWhite md:w-[60%] md:grid-cols-30-70 md:grid-rows-80-20 md:p-4  md:min-h-[66.6vh] md:rounded-xl md:shadow-lg ">
        {/* Navigation */}
        <div className="md:row-span-2 md:bg-desktop-sidebar md:bg-no-repeat md:bg-cover md:h-full md:rounded-xl md:p-6 md:mr-8">
          <Nav currentStep={currentStep} formData={formData} />
        </div>

        {/* Main Form Content */}
        <main className="flex-1 flex flex-col items-center px-4 pt-10 md:flex-none">
          {renderStep()}
        </main>

        {/* Sticky Footer Button */}
        <footer className="bg-pureWhite w-full px-4 py-4 flex  md:bg-transparent md:mt-4 ">
          <StepFooter
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formData={formData}
            setErrors={setErrors}
          />
        </footer>
      </div>
    </div>
  );
};

export default MultiStepForm;
