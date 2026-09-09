import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Impacts from "./pages/Impacts";
import Solutions from "./pages/Solutions";
import "./App.css"

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setPage(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (page === "#impacts") {
    return <Impacts />;
  }

  if (page === "#recommendations") {
    return <Solutions />;
  }

  return (
    <div>
      <Header />
      <Card
          title="About Amazon Warehouse Robots"
          description="Amazon Warehouse Robots are advanced robotic systems that help the Amazon company with a variety of tasks. These robots help sort packages, reduce repetitive tasks, improve inventory processing, create customer paper bags, transport large quantities of items to employees, lift heavy packages, and produce perfectly sized packaging. By helping the company do these tasks, these robots help improve efficiency and productivity. So far, Amazon has deployed over 1 million robots."
      />
      
      <Card
          title="History of Amazon Warehouse Robots"
          description="Amazon Warehouse Robots have a long history of improving productivity and efficiency within the company's fulfillment centers. In 2012, Amazon made a significant investment in robotics by acquiring Kiva Systems, a robotics company. Although Amazon had already implemented automation in its warehouses and fulfillment centers before, the acquisition of Kiva marked a generational leap in the company's use of robotics and innovation. Kiva helped establish the foundation for the increased use of robotics and advanced technology throughout Amazon's facilities. Since then, Amazon has continued to develop and implement new technologies designed to improve the customer and employee experience while making workplaces safer, simpler, and more productive. Over the years, Amazon's use of robotics has continued to expand significantly. More than a decade after the Kiva acquisition, Amazon has deployed hundreds of thousands of robots across its operations while continuing to support more than 1 million jobs worldwide.
 "
      />
      <Card
          title="Applications of Amazon Warehouse Robots"
          description="Amazon Warehouse Robots have a wide range of applications and assist with many different tasks throughout Amazon's fulfillment centers. For example, robots such as Sequoia can store hundreds of thousands of customer orders per week and help organize inventory for employees picking items to fulfill customer orders. Other robots, such as Hercules and Titan, can carry thousands of pounds and are used to transport large, heavy, and numerous items throughout the warehouse. Vulcan Pick and Vulcan Stow assist with picking and storing items in the upper rows of inventory pods. Additionally, Cardinal is designed to gently lift packages and place them into carts, while Robin helps sort packages efficiently. Together, these robots improve productivity, efficiency, and safety within Amazon's fulfillment centers."
      />
    </div>

  );
}

export default App;