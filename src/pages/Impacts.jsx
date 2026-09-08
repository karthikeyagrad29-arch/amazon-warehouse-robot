import warehouseRobotImage from "../assets/warehouse_robot.png"

function Impacts() {
	return (
		<main className="impacts-page">
			<div className="impacts-top">
				<a className="back-home" href="#home">Back to Home page</a>
			</div>
			<h1>Impacts</h1>
			<img className="impacts-image" src={warehouseRobotImage} alt="Warehouse robot" />
			<section className="impact-headings">
				<h2>Cultural Impact</h2>
				<h3>Positive Impact</h3>
				<p className="cultural-impact-copy">Amazon Warehouse Robots have positively impacted employees, the company, and its customers. Warehouse employees benefit by gaining exposure to advanced technologies, such as artificial intelligence and robotics, which can help them develop valuable technical skills and experience. This also demonstrates the evolving nature of warehouse work and the skills required in modern workplaces.</p>
				<p className="cultural-impact-copy">Amazon also benefits culturally from the use of AI and robotics, as these technologies demonstrate the company's focus on innovation, efficiency, and technological advancement. The use of advanced technology helps shape Amazon's identity as a company that continues to invest in new solutions.</p>
				<p className="cultural-impact-copy">Customers also benefit from the increased efficiency provided by warehouse robots. Faster and more accurate package processing can lead to quicker deliveries and improved customer satisfaction. As customers experience reliable service, they may develop greater trust in the technology and systems that support Amazon's operations.</p>
				<div className="cultural-impact-underline" aria-hidden="true" />
				<h3 className="negative-impact-heading">Negative Impact</h3>
				<p className="negative-impact-copy">There are also several potential negative social and cultural impacts associated with the increased use of AI and robotics in warehouses. For example, warehouse employees may fear job loss as AI and robotic technology continues to advance. Increased automation could also reduce opportunities for employees to interact and communicate with one another in the workplace. Additionally, some workers may feel that they are being treated unfairly or that their concerns about workplace changes are not being adequately addressed.</p>
				<p className="negative-impact-copy">Amazon may also experience negative cultural impacts as employees adjust to technological changes. Some workers may disagree with or resist changes in the workplace, which could lead to conflicts between employees and management. If workplace changes are not implemented carefully and safely, they could also contribute to increased workplace stress or safety concerns.</p>
				<p className="negative-impact-copy">Customers may also be negatively affected if they begin to believe that AI and robots perform all warehouse tasks independently. This could make people less aware of the important role that human workers continue to play in Amazon's operations and the overall delivery process.</p>
				<h2>Economic Impact</h2>
				<h3>Positive Impact</h3>
				<p className="cultural-impact-copy">Amazon Warehouse Robots can significantly increase productivity, reduce long-term operating costs, and enable the company to process a greater number of customer orders. These improvements in efficiency can potentially contribute to increased revenue and profitability for Amazon.</p>
				<p className="cultural-impact-copy">Warehouse employees can gain valuable technical and robotics-related skills through working with advanced technology. These skills may provide opportunities for career advancement and employment in higher-skilled positions.</p>
				<p className="cultural-impact-copy">Increased efficiency within Amazon's fulfillment centers can also benefit customers by allowing orders to be processed more quickly. This can result in faster delivery times, improved service, and potentially lower costs for customers.</p>
				<div className="cultural-impact-underline" aria-hidden="true" />
				<h3 className="negative-impact-heading">Negative Impact</h3>
				<p className="negative-impact-copy">The purchasing, development, and maintenance of robots and AI technology can require a significant financial investment. Additionally, technical failures or system malfunctions may cause operational delays, resulting in additional costs for Amazon.</p>
				<p className="negative-impact-copy">Warehouse employees may also experience concerns about job security as automation increasingly performs tasks that were previously completed by human workers. Employees may require additional training to develop the skills necessary to work effectively with new technologies.</p>
				<p className="negative-impact-copy">Customers may be negatively affected if technical problems occur within Amazon's automated systems, as these issues could result in delayed order processing and deliveries. Furthermore, the significant costs associated with developing and implementing advanced technology could potentially contribute to higher costs for customers.</p>
				<h2>Environmental Impact</h2>
				<h3>Positive Impact</h3>
			</section>
		</main>
	)
}

export default Impacts;
