const ThankYou = ({setOpen}) => {
	return (
		<>
			<div
				id="popup-modal"
				tabIndex="-1"
				className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 flex bg-black/[.2]"
			>
				<div className="relative max-h-full w-full max-w-2xl p-4">
					<div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
						<button
							type="button"
							className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-hide="popup-modal"
              onClick={() => {
                setOpen(false)
              }}
						>
							<svg
								className="h-3 w-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
						<div className="p-4 text-center md:p-10">
              <h1 className="text-5xl my-5 font-bold text-white">Thank You</h1>
							<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
								Your message has been delivered successfully.
							</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThankYou;
