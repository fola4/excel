const ThankYou = ({ setOpen }) => {
  return (
    <>
      {/* <div
				id="popup-modal"
				tabIndex="-1"
				className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 flex bg-black/[.2]"
			> */}
      <div className="pt-[10%]"></div>
      <div className="relative max-h-full w-full p-4">
        <div className="p-4 text-center border w-full md:p-10">
          <h1 className="text-5xl my-5 font-bold">Thank You</h1>
          <h3 className="mb-5 text-lg font-normal text-black">
            Your message has been delivered successfully.
          </h3>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ThankYou;
