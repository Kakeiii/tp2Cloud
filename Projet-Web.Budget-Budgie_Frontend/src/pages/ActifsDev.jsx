import {useState, useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function Actifs() {

    const [actifs, setActifs] = useState([]);

/*    const [newActifs, setNewActifs] = useState({
        type:"",
        nom:"",
        total:""
    });*/

    const [newActif, setNewActif] = useState([]);

    const setAttribut = (e) => {
        setNewActif({...newActif, [e.type]: 'Bancaire'})
    }

    const navigate = useNavigate();

    const addNewActif = (e) => {
        e.preventDefault();
        setAttribut(e.type);
        axios.post("http://localhost:8888/comptes/addCompte", newActif)
            .then(() => {
                navigate("/Dev")
            }).catch((error) => {
                console.log(error);
        });
    }

    const loadActifs = async () => {
        const result = await axios.get("http://localhost:8888/comptes/getTest");
        setActifs(result.data);
    }

    useEffect(() => {
        loadActifs();
    }, []);

    return (
        <div className="my-5">
            <div>
                <Navbar />
            </div>
            <h2 className="mt-5">Actifs</h2>
            <form method="post" onSubmit={(e) => addNewActif(e)}>
                <button type="submit">Test add</button>
            </form>
            {
                actifs.map((data) => (
                    data.type === null
                        ?
                        (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                        </div>)
                        : null
                ))
            }

            <div className="mt-5">
                <div className="row">
                    <div className="col my-5">
                        <h3 className="text-center">Comptes bancaires</h3>
                        {
                            actifs.map((data) => (
                                data.type === "Bancaire"
                                    ?
                                    (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                                        <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                                        <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                                    </div>)
                                    : null
                            ))
                        }
                        <button>+ Ajouter</button>
                    </div>

                    <div className="col my-5">
                        <h3 className="text-center">Cartes de crédits</h3>
                        {
                            actifs.map((data) => (
                                data.type === "Credit"
                                    ?
                                    (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                                        <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                                        <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                                    </div>)
                                    : null
                            ))
                        }
                        <button>+ Ajouter</button>
                    </div>

                    <div className="col my-5">
                        <h3 className="text-center">Divers</h3>
                        {
                            actifs.map((data) => (
                                data.type === "Divers"
                                    ?
                                    (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                                        <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                                        <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                                    </div>)
                                    : null
                            ))
                        }
                        <button>+ Ajouter</button>
                    </div>

                    <hr />

                    <h2>Prêts</h2>
                    <div className="row">
                        <div className="col my-5">
                            {
                                actifs.map((data) => (
                                    data.type === "Prets"
                                        ?
                                        (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                                            <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                                        </div>)
                                        : null
                                ))
                            }
                            <button>+ Ajouter</button>
                        </div>
                    </div>

                    <hr />

                    <h2>Épargnes</h2>
                    <div className="row">
                        <div className="col my-5">
                            {
                                actifs.map((data) => (
                                    data.type === "Epargnes"
                                        ?
                                        (<div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}} key={data.i}>
                                            <span className="input-group-text" style={{minWidth: '100px'}}>{data.nom}</span>
                                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value={data.total.toFixed(2)}/>
                                        </div>)
                                        : null
                                ))
                            }
                            <button>+ Ajouter</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Actifs;