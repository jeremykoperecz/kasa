import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Home() {
	    
const [appart, setAppart] = useState([]);

useEffect(() => {
	axios.get("/logements.json").then((res) => setAppart(res.data)); //requète AXIOS pour prochaine utilisation API
}, []);
			
	return  (    
		<>
			<Banner />
			<div className="cards-container">
				{appart.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}	
