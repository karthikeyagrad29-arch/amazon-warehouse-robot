import warehouseRobotImage from "../assets/warehouse_robot.png"
import sequoiaImage from "../assets/sequoia.png"
import herculesImage from "../assets/hercules.png"
import titanImage from "../assets/titan.png"
import vulcanPickImage from "../assets/vulcan_pick.png"
import vulcanStowImage from "../assets/vulcan_stow.png"
import sparrowRobotImage from "../assets/sparrow_robot.png"
import TypingTitle from "../components/TypingTitle"

function Impacts() {
	return (
		<main className="impacts-page">
			<div className="impacts-top">
				<a className="back-home" href="#home">Back to Home page</a>
			</div>
			<TypingTitle text="Impacts" />
			<img className="impacts-image" src={warehouseRobotImage} alt="Warehouse robot" />
			<section className="impact-headings">
				<h2>Cultural Impact</h2>
				<h3>Positive Impact</h3>
				<img className="sequoia-image" src={sequoiaImage} alt="Sequoia warehouse robot" />
				<p className="cultural-impact-copy">Amazon Warehouse Robots have positively impacted employees, the company, and its customers. Warehouse employees benefit by gaining exposure to advanced technologies, such as artificial intelligence and robotics, which can help them develop valuable technical skills and experience. This also demonstrates the evolving nature of warehouse work and the skills required in modern workplaces.</p>
				<p className="cultural-impact-copy">Amazon also benefits culturally from the use of AI and robotics, as these technologies demonstrate the company's focus on innovation, efficiency, and technological advancement. The use of advanced technology helps shape Amazon's identity as a company that continues to invest in new solutions.</p>
				<p className="cultural-impact-copy">Customers also benefit from the increased efficiency provided by warehouse robots. Faster and more accurate package processing can lead to quicker deliveries and improved customer satisfaction. As customers experience reliable service, they may develop greater trust in the technology and systems that support Amazon's operations.</p>
				<div className="cultural-impact-underline" aria-hidden="true" />
				<img className="hercules-image" src={herculesImage} alt="Hercules warehouse robot" />
				<h3 className="negative-impact-heading">Negative Impact</h3>
				<p className="negative-impact-copy">There are also several potential negative social and cultural impacts associated with the increased use of AI and robotics in warehouses. For example, warehouse employees may fear job loss as AI and robotic technology continues to advance. Increased automation could also reduce opportunities for employees to interact and communicate with one another in the workplace. Additionally, some workers may feel that they are being treated unfairly or that their concerns about workplace changes are not being adequately addressed.</p>
				<p className="negative-impact-copy">Amazon may also experience negative cultural impacts as employees adjust to technological changes. Some workers may disagree with or resist changes in the workplace, which could lead to conflicts between employees and management. If workplace changes are not implemented carefully and safely, they could also contribute to increased workplace stress or safety concerns.</p>
				<p className="negative-impact-copy">Customers may also be negatively affected if they begin to believe that AI and robots perform all warehouse tasks independently. This could make people less aware of the important role that human workers continue to play in Amazon's operations and the overall delivery process.</p>
				<h2>Economic Impact</h2>
				<h3>Positive Impact</h3>
				<img className="titan-image" src={titanImage} alt="Titan warehouse robot" />
				<p className="cultural-impact-copy">Amazon Warehouse Robots can significantly increase productivity, reduce long-term operating costs, and enable the company to process a greater number of customer orders. These improvements in efficiency can potentially contribute to increased revenue and profitability for Amazon.</p>
				<p className="cultural-impact-copy">Warehouse employees can gain valuable technical and robotics-related skills through working with advanced technology. These skills may provide opportunities for career advancement and employment in higher-skilled positions.</p>
				<p className="cultural-impact-copy">Increased efficiency within Amazon's fulfillment centers can also benefit customers by allowing orders to be processed more quickly. This can result in faster delivery times, improved service, and potentially lower costs for customers.</p>
				<div className="cultural-impact-underline" aria-hidden="true" />
				<h3 className="negative-impact-heading">Negative Impact</h3>
				<img className="vulcan-pick-image" src={vulcanPickImage} alt="Vulcan warehouse robot" />
				<p className="negative-impact-copy">The purchasing, development, and maintenance of robots and AI technology can require a significant financial investment. Additionally, technical failures or system malfunctions may cause operational delays, resulting in additional costs for Amazon.</p>
				<p className="negative-impact-copy">Warehouse employees may also experience concerns about job security as automation increasingly performs tasks that were previously completed by human workers. Employees may require additional training to develop the skills necessary to work effectively with new technologies.</p>
				<p className="negative-impact-copy">Customers may be negatively affected if technical problems occur within Amazon's automated systems, as these issues could result in delayed order processing and deliveries. Furthermore, the significant costs associated with developing and implementing advanced technology could potentially contribute to higher costs for customers.</p>
				<h2>Environmental Impact</h2>
				<h3>Positive Impact</h3>
				<img className="vulcan-stow-image" src={vulcanStowImage} alt="Vulcan stow warehouse robot" />
				<p className="cultural-impact-copy">Amazon Warehouse Robots can provide several positive environmental benefits for different stakeholders. Warehouse employees benefit from more efficient warehouse operations, which can help reduce energy waste and unnecessary packaging materials. Employees can also work alongside technologies designed to improve the overall efficiency of fulfillment centers.</p>
				<p className="cultural-impact-copy">Amazon benefits environmentally because AI and robotics can improve the efficiency and speed of warehouse operations. Increased efficiency can reduce wasted energy and resources while helping Amazon work toward its environmental sustainability goals.</p>
				<p className="cultural-impact-copy">Customers may also benefit from increased efficiency, which could potentially reduce costs. Additionally, AI technology can help determine the appropriate packaging size for each order, reducing the amount of packaging material used and minimizing unnecessary waste.</p>
				<div className="cultural-impact-underline" aria-hidden="true" />
				<h3 className="negative-impact-heading">Negative Impact</h3>
				<img className="sparrow-robot-image" src={sparrowRobotImage} alt="Sparrow warehouse robot" />
				<p className="negative-impact-copy">There are also potential negative environmental impacts associated with the increased use of AI and robotics. Warehouse employees may experience concerns about job security as AI and automation continue to replace or reduce the need for certain tasks previously performed by human workers.</p>
				<p className="negative-impact-copy">Amazon may also face environmental challenges because developing, operating, and maintaining robots and AI systems requires significant resources and energy. The production and disposal of technological equipment can also contribute to resource consumption and environmental waste.</p>
				<p className="negative-impact-copy">Customers may be indirectly affected by the increased energy demands associated with fast shipping and highly efficient delivery services. The transportation required to provide faster deliveries can increase fuel consumption, resource use, and greenhouse gas emissions.</p>
			</section>
		</main>
	)
}

export default Impacts;
