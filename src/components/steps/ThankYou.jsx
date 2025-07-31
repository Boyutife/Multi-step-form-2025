import thankYouIcon from '../../assets/images/icon-thank-you.svg';

const ThankYou = ({ formData, onReset }) => {
  return (
    <>
      <div className="  bg-pureWhite flex flex-col items-center justify-center gap-8 py-16 px-5 rounded-xl md:rounded-none mt-10 md:mt-0 md:p-0 md:w-full">
        <img src={thankYouIcon} alt="Thank-you-icon" />
        <div className="title flex flex-col justify-center items-center">
          <h1 className="text-marineBlue font-bold text-3xl text-center">
            Thank you, {formData.name}!
          </h1>

          <p className="text-xl my-3 text-coolGray text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
          <button
            onClick={onReset}
            className="mt-4 px-4 py-2 bg-marineBlue text-pureWhite rounded"
          >
            Start Over
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
