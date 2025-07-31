import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';

const Summary = ({
  selectPlan,
  addOns,
  isMonthly,
  setCurrentStep,
  isConfirmed,
  formData,
  setIsConfirmed,
  setFormData,
  setSelectPlan,
  setAddOns,
}) => {
  const onRest = () => {
    setCurrentStep(1);
    setIsConfirmed(false);
    setFormData({ name: '', email: '', phone: '' });
    setSelectPlan({ id: null, name: '', price: 0, billing: 'monthly' });
    setAddOns([]);
  };

  return (
    <>
      {!isConfirmed && (
        <FinishingUp
          selectPlan={selectPlan}
          addOns={addOns}
          isMonthly={isMonthly}
          setCurrentStep={setCurrentStep}
        />
      )}
      {isConfirmed && <ThankYou formData={formData} onReset={onRest} />}
    </>
  );
};

export default Summary;
