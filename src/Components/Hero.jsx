import Stack from '../Data/Stack';
import Profil from '../Images/profil.png';

function Hero() {
	return (
		<div className="px-5 text-center md:p-0 md:text-left">
			<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
				<div className="max-w-lg flex flex-col gap-5">
					<h2 className="md:text-4xl text-xl font-bold">Développeur Front-End 👋 </h2>
					<p className="md:text-xl text-sm">
						Hello, je m'appel Alex. Un développeur front qui aime React et habite a Angoûleme en France
					</p>
				</div>

				<img className="box md:h-[15vw] h-[150px] " src={Profil} alt="photo de profil" />

				{/*  */}
			</div>
			<div className="flex flex-col md:flex-row items-center gap-6 ">
				<p className="hidden:border-r md:pr-20 border-gray-400 md:border-r text-2xl font-semibold ">
					Tech Stack
				</p>
				<div>
					<ul className="flex flex-wrap justify-center md:flex-row items-center gap-6 py-20">
						{Stack.map((item) => (
							<li key={item.id}>
								<img className="h-12" src={item.image} alt={item.alt} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Hero;
