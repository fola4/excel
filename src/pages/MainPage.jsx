import React from 'react';
import { video, wImage03, wImage04, corkNet } from '../assets/images';
import { Link } from 'react-router-dom';
import { teamMembers } from '../constants';
import TeamMember from '../components/TeamMember';
import { motion } from 'framer-motion';
import Slideshow from '../components/Slider';

const fade = {
	hiddenLeft: {
		x: '-30vw',
		opacity: 0,
	},
	hiddenRight: {
		x: '30vw',
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, when: 'beforeChildren' },
	},
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 5,
		},
	},
};

const variants = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	animate: (delay) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: delay * 0.2,
		},
	}),
};

function MainPage() {
	let images = [corkNet, wImage03, wImage04];

	return (
		<div>
			<header id="main-page" className="px-0">
				<Slideshow images={images} page={'main'} />
			</header>

			{/* <!-- section 2 --> */}
			<section className="grid auto-rows-auto grid-cols-1 grid-rows-[400px_1fr] gap-y-8 bg-black px-8 pt-12 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8 lg:py-28 xl:grid-cols-[45%_1fr_45%]">
				<motion.div
					className="flex flex-col space-y-8 text-[#818181] xl:space-y-12 xl:self-center"
					variants={fade}
					initial="hiddenLeft"
					whileInView="animate"
				>
					<h1 className="text-center font-medium tracking-widest lg:text-left lg:text-xl">
						LEADING #1 BADMINTON CENTRE
					</h1>

					<hr />

					<p className="text-center font-light text-white lg:text-left lg:text-xl">
						We are a mixed bunch of friendly, social badminton fans based in the
						borough of Barnet, North London. Everyone is welcome to our club
						regardless of age, gender, capacity or abilities. We're all about
						getting fitter and honing those badminton skills. It's a fantastic
						way to stay in shape while having a blast on the court. Your energy
						and enthusiasm would be an awesome addition to our sessions.
					</p>

					<Link to="/membership" className="self-center lg:self-start">
						<button className="rounded-[40px] border border-white px-8 py-1 capitalize text-white hover:bg-white hover:text-black">
							get in touch
						</button>
					</Link>
				</motion.div>

				<motion.div
					className="max-width grid grid-cols-2 grid-rows-2 gap-12 text-white xl:col-start-3"
					variants={fade}
					initial="hiddenRight"
					whileInView="animate"
				>
					<motion.div
						className="flex flex-col items-center gap-y-8 lg:col-span-2"
						variants={variants}
						initial="hidden"
						whileInView="animate"
						custom={0}
						viewport={{
							once: true,
						}}
					>
						<span className="flex h-full self-center text-8xl lg:text-7xl xl:text-9xl">
							3
						</span>
						<p className="uppercase italic">Personal Trainers</p>
					</motion.div>

					<motion.div
						className="flex flex-col items-center gap-y-8"
						variants={variants}
						initial="hidden"
						whileInView="animate"
						custom={1}
						viewport={{
							once: true,
						}}
					>
						<span className="flex h-full self-center text-8xl lg:text-7xl xl:text-9xl">
							2
						</span>
						<p className="uppercase italic">Courts</p>
					</motion.div>
					<motion.div
						className="flex flex-col items-center gap-y-8"
						variants={variants}
						initial="hidden"
						whileInView="animate"
						custom={2}
						viewport={{
							once: true,
						}}
					>
						<span className="flex h-full self-center text-8xl lg:text-7xl xl:text-9xl">
							3
						</span>
						<p className="uppercase italic">Coaches</p>
					</motion.div>
				</motion.div>
			</section>

			{/* <!-- section 3 --> */}
			<section className="flex flex-col lg:flex-row">
				<div className=" grid min-h-full sm:place-items-center py-8 md:ml-8">
					<div className="flex flex-col gap-y-8 text-center lg:text-left">
						<span className="font-thin tracking-widest md:text-3xl">
							OUR STORY
						</span>

						<h2 className="font-bold lg:text-3xl lg:tracking-widest">
							Founded by diverse badminton fans in Barnet, London, We welcome
							all abilities, providing coaching and family sessions.
						</h2>

						<Link to="/about us">
							<button className="rounded-3xl border border-black px-5 py-2 text-2xl text-black transition hover:bg-black  hover:text-white">
								About Us
							</button>
						</Link>
					</div>
				</div>

				<div>
            <video
            id='mainpageVideo'
              src={video}
              autoPlay={true}
              muted={true}
              loop={true}
              className="h-full"
            />
				</div>
			</section>

			{/* <!-- section 4 --> */}
			<section className="bg-black px-20 py-10">
				<div className="flex flex-col items-center py-20 text-white md:flex-row md:justify-between">
					<span className="whitespace-nowrap text-4xl font-extralight tracking-widest">
						OUR TEAM
					</span>
					<p className="whitespace-nowrap md:text-2xl lg:text-4xl">
						Grow your skill with our team
					</p>
				</div>

				<motion.div
					className="grid gap-x-12 gap-y-12 overflow-y-hidden md:grid-cols-2 lg:grid-cols-4"
					variants={container}
					initial="hidden"
					animate="show"
				>
					{teamMembers.slice(0, 4).map((member, index) => (
						<TeamMember
							key={index}
							index={index}
							name={member.name}
							image={member.image}
						/>
					))}
				</motion.div>
			</section>

			{/* <!-- section 5 --> */}
			<article className="group relative px-4 py-16">
				<i className="fa-solid fa-quote-left absolute left-0 top-0 text-[10rem] text-black opacity-20 duration-1000 group-hover:rotate-[720deg] group-hover:scale-125 md:text-[10rem] lg:text-[15rem]" />
				<i className="fa-solid fa-quote-right absolute bottom-0 right-0 text-[10rem] text-black opacity-20 duration-1000 group-hover:rotate-[-720deg] group-hover:scale-125 md:text-[10rem] lg:text-[15rem]"></i>

				<h3 className="text-center text-5xl font-light leading-[1.1] md:text-6xl lg:px-6 lg:text-8xl lg:leading-[1.35]">
					"Those who play <span className="text-red-500">badminton</span> well,
					take <span className="text-red-500">decisions</span> quickly."
				</h3>

				<hr className="my-8 border-black" />

				<p className="text-center text-lg italic lg:pt-8 lg:text-2xl">
					- Dmitry Medvedev
				</p>
			</article>
		</div>
	);
}

export default MainPage;
