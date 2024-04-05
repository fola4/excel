import React, { useState } from 'react';

import Laas from '@peteradeojo/laas-sdk';
import ThankYou from './ThankYou';

function Membership() {
	const [done, setDone] = useState(false);

	const sendEmail = async (message) => {
		try {
			await fetch('https://fola-emailer.up.railway.app', {
				method: 'POST',
				body: JSON.stringify({
					email: {
						to: 'info@badmintonexcel.com',
						subject: 'BadmintonExcel Request',
						html: message,
					},
				}),
				headers: {
					'Content-type': 'application/json',
				},
			});
			Laas.sendLog(
				{
					level: 'info',
					text: message,
				},
				'6f7b8451-0724-492d-af75-a8da0e2b108f'
			);
			// alert('Ok');
			setDone(true);
			setTimeout(() => {
				setDone(false);
			}, 3000);
		} catch (error) {
			Laas.sendLog(
				{
					level: 'fatal',
					text: error.message,
					context: { error, body: { message } },
				},
				'6f7b8451-0724-492d-af75-a8da0e2b108f'
			);
			alert('An error occured');
		}
	};

	return (
		<div>
			{done ? <ThankYou setOpen={setDone} /> : null}
			<header id="membership">
				<div className=" absolute left-0 top-0 h-full w-full bg-black opacity-75"></div>

				{/* <!-- content --> */}
				<div className="relative z-20 grid grid-cols-1 gap-x-5 px-8 pb-3 lg:grid-cols-2">
					<div className="order-2 flex flex-col self-center text-center text-white md:block lg:text-left">
						<h2 id="getInTouch" className="mb-0 pt-2 text-7xl">
							Get In Touch
						</h2>
						<p className="border-b border-gray-400 py-8 text-2xl font-thin">
							Ready to experience the excitement of badminton?<br></br>Let us
							help you become even greater at what you do. Get in touch now and
							unleash your potential on the court!
						</p>

						<div className="mt-3 grid grid-cols-1 gap-y-8 md:grid-cols-2">
							<div className="text-md self-center md:self-start">
								<div className="flex flex-col justify-center">
									<p className="text-center font-bold uppercase italic">
										Our Badminton Sessions
									</p>
									<p className="text-center">Tuesdays: 20:20 - 22:00</p>
									<p className="text-center">(Rocket) Feathers</p>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-center">Thursdays: 18:20 - 19:50</p>
									<p className="text-center">(Ace) Feathers</p>
								</div>
								<div className="flex flex-col justify-center">
									<p className="text-center">Sundays: 15:00 - 17:00 </p>
									<p className="text-center">(Family) Plastics/Feathers</p>
								</div>
							</div>
							<div className="flex flex-col gap-y-5 self-center text-xl">
								<a
									href="https://www.google.com/maps/search/?api=1&query=Barnet, North London"
									target="_blank"
								>
									<i
										className="fa-sharp fa-solid fa-location-dot mr-2"
										style={{ color: '#818181' }}
									></i>
									Barnet, North London
								</a>
								<p>
									<i
										className="fa-sharp fa-solid fa-phone-volume mr-2"
										style={{ color: '#818181' }}
									></i>
									<a href="tel:+447956804395">+447956804395</a>
								</p>
								<p>
									<i
										className="fa-sharp fa-solid fa-envelope mr-2"
										style={{ color: '#818181' }}
									></i>
									<a href="mailto:info@badmintonexcel.com">info@badmintonexcel.com</a>
								</p>
							</div>
						</div>
					</div>

					<form
						className="order-1 rounded-xl bg-[hsla(0,0%,99%,.1)] px-8 pb-10 pt-5 lg:order-3"
						id="membershipForm"
						onSubmit={async (e) => {
							e.preventDefault();
							let fname = document.getElementById('fname');
							let lname = document.getElementById('lname');
							let email = document.getElementById('email');
							/**
							 * @type HTMLInputElement
							 */
							let tele = document.getElementById('tele');
							let msg = document.getElementById('extra');

							const match = tele.value.match(
								/^(?:\+[1-9]\d{1,2})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/
							);

							if (!match) {
								alert('Invalid phone number');
								return;
							}

							let ebody = `
                  <b>Name: </b> ${lname.value.toUpperCase()}, ${fname.value}
                  <br />
                  <b>Email: </b> ${email.value}
                  <br />
                  <b>Tele: </b> ${tele.value}
                  <br />
									<b>Message: ${msg.value}</b>
                `;

							await sendEmail(ebody);
							document.getElementById('membershipForm').reset();
						}}
					>
						<p className="my-10 text-center text-5xl font-medium text-[hsla(0,0%,95%)]">
							Join Our Team
						</p>
						<div className="grid grid-cols-1 grid-rows-4 gap-x-8 gap-y-5">
							<input
								id="fname"
								type="text"
								placeholder="First Name"
								className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
								required={true}
							/>
							<input
								id="lname"
								type="text"
								placeholder="Last Name"
								className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
								required={true}
							/>
							<input
								id="email"
								type="email"
								placeholder="Email"
								className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
								required={true}
							/>
							<input
								id="tele"
								type="tel"
								placeholder="Phone"
								className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
								required={true}
							/>
							<textarea
								id="extra"
								className="border-b border-gray-400 bg-transparent py-3 text-xl font-extralight text-gray-200 outline-none placeholder:text-white"
								rows={5}
								placeholder="Message"
							></textarea>
						</div>

						<input
							// onClick={}
							id="submit"
							type="submit"
							className="mt-8 w-full cursor-pointer rounded-full border border-transparent bg-black py-3 text-center text-2xl font-normal text-[hsl(0,0%,95%)] transition hover:bg-white hover:text-[#000]"
						/>
					</form>
				</div>
			</header>
		</div>
	);
}

export default Membership;
