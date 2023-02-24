import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";


export default function Home() {
	const [appart, setAppart] = useState([]);
	const [loader, setLoader] = useState(true);   // loader present 

	useEffect(() => {
		setLoader(true);
		axios.get("/logements.json").then((res)=> setAppart(res.data)); //requète AXIOS pour prochaine utilisation API
		setLoader(false) 
},[]);         
			
	
	return loader ? (     // le loader et present jusqu'a ce que la requete axios importe les images de l'api
		<Loader />
	) : (
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

