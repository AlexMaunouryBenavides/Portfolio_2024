import Mail from '../Images/Contact/email.png';
import Map from '../Images/Contact/map.png';

function Contact() {
	return (
		<div className=" px-3">
			<div className="py-10">
				<h6 className="text-[#8f95d3] text-lg font-semibold py-3">Contact</h6>
				<p className="text-2xl font-bold">N'hésitez pas à me contactez 👇 </p>
			</div>

			<div className="flex flex-wrap lg:flex-row items-center gap-20">
				<div className="flex items-center gap-10">
					<img className="h-8" src={Map} alt="icone location" />
					<div>
						<p className="text-lg font-bold">Location</p>
						<p>France</p>
					</div>
				</div>
				<div className="flex items-center gap-10">
					<img className="h-8" src={Mail} alt="icone email" />
					<div>
						<p className="text-lg font-bold">Mail</p>
						<p>alexandremaunoury@yahoo.fr</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
