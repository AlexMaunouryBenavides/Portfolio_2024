import Github from '../Images/SocialsImg/github.png';
import Share from '../Images/share.png';
import data from '../Data/data';
import { Link } from 'react-router-dom';

function Projects() {
	return (
		<div id="projects" className="max-w-6xl m-auto py-20">
			<div className="px-6">
				<h2 className="text-xl font-semibold text-[#8f95d3]">Portfolio</h2>
				<h3 className="text-3xl font-bold py-6">Chaque projet est une pièce unique.</h3>
			</div>
			{data.map((item) => (
				<div key={item.id} className="lg:py-32 py-10 px-6  flex flex-col gap-6 border-t">
					<div
						className={`flex  justify-between items-center ${
							item.id % 2 === 0 ? 'lg:flex-row-reverse flex-col-reverse' : 'lg:flex-row flex-col'
						}`}>
						<img className="w-[500px] shadow-lg" src={item.image} alt={item.alt} />
						<div className="max-w-[450px] flex flex-col py-6 items-center gap-5 text-center">
							<h4 className="text-xl font-bold">{item.name}</h4>
							<p className="leading-7">{item.description}</p>
							<div className="flex items-center justify-center flex-wrap gap-4">
								{item.stack.map((stackUsed, indexStack) => (
									<span key={indexStack} className="font-bold uppercase underline text-sm ">
										{stackUsed}
									</span>
								))}
							</div>
							<div className="flex items-center gap-5 p-5">
								{item.liens.github.trim() !== '' ? (
									<Link target="_blank" to={item.liens.github}>
										<div className="flex items-center gap-2">
											<p className="hover:text-[#8f95d3] duration-150">Code</p>
											<img className="h-6" src={Github} alt="Lien de redirection vers le gitHub du projet" />
										</div>
									</Link>
								) : (
									''
								)}
								<Link target="_blank" to={item.liens.site}>
									<div className="flex items-center gap-2">
										<p className="hover:text-[#8f95d3] duration-150">Live demo</p>
										<img className="h-6" src={Share} alt="lien de redirection vers la demo du projet" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Projects;
