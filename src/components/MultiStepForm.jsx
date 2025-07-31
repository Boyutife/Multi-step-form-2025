import { useState } from 'react';
import Nav from './Nav';
import StepFooter from './StepFooter';
import PersonalInfoForm from './steps/PersonalInfoForm';
import AddOns from './steps/AddOns';
import SelectPlan from './steps/SelectPlan';
import Summary from './steps/Summary';
import ThankYou from './steps/ThankYou';
import FinishingUp from './steps/FinishingUp';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    selectPlan: '',
  });

  const [selectPlan, setSelectPlan] = useState({
    id: null,
    name: '',
    price: 0,
    billing: 'monthly',
  });

  const [addOns, setAddOns] = useState([]);

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
        return (
          <SelectPlan
            isMonthly={isMonthly}
            setIsMonthly={setIsMonthly}
            selectPlan={selectPlan}
            setSelectPlan={setSelectPlan}
            errors={errors}
          />
        );
      case 3:
        return (
          <AddOns isMonthly={isMonthly} addOns={addOns} setAddOns={setAddOns} />
        );
      case 4:
        return (
          <Summary
            selectPlan={selectPlan}
            addOns={addOns}
            isMonthly={isMonthly}
            setCurrentStep={setCurrentStep}
            isConfirmed={isConfirmed}
            formData={formData}
            setFormData={setFormData}
            setIsConfirmed={setIsConfirmed}
            setAddOns={setAddOns}
            setSelectPlan={setSelectPlan}
          />
        );

      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="container relative min-h-screen font-ubuntu bg-magnolia flex md:flex md:justify-center md:items-center">
      {/* Background Image for Mobile */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-mobile-sidebar bg-no-repeat bg-cover z-0 md:hidden" />

      {/* Foreground Content */}
      <div className=" container relative z-10 flex flex-col items-center  sm:min-h-screen pt-10 md:grid md:bg-pureWhite md:w-[50%] md:grid-cols-30-70 md:grid-rows-80-20 md:p-4  md:min-h-[66.6vh] md:rounded-xl md:shadow-lg  ">
        {/* Navigation */}
        <div className="md:row-span-2 md:bg-desktop-sidebar md:bg-no-repeat md:bg-cover md:h-full md:rounded-xl md:p-6 md:mr-8">
          <Nav currentStep={currentStep} formData={formData} />
        </div>

        {/* Main Form Content */}
        <main className="flex-1 flex flex-col items-center md:items-start px-4 ">
          {renderStep()}
        </main>

        {/* Sticky Footer Button */}
        <footer className="bg-pureWhite mt-1 w-full px-4 py-4 flex  md:bg-transparent md:mt-4  ">
          <StepFooter
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            formData={formData}
            setErrors={setErrors}
            selectPlan={selectPlan}
            setIsConfirmed={setIsConfirmed}
            isConfirmed={isConfirmed}
          />
        </footer>
      </div>
    </div>
  );
};

export default MultiStepForm;
