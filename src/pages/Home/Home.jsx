import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";



export default function Home() {
	    
const [appart, setAppart] = useState([]);

useEffect(() => {
	async function fetchHome() {
		try {
			const response = await fetch("/logements.json")
			console.log(response)
			const appart = await response.json()
			setAppart(appart)
		} catch (err) {
			console.log(err)
		}
	}
		fetchHome()
}, [])
			
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
