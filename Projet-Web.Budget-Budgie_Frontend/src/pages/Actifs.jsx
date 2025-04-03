import 'react';
import Navbar from '../navbar/Navbar';
function Actifs() {
    return (
        <div className="my-5">
            <div>
                <Navbar />
            </div>
            <h2 className="mt-5">Actifs</h2>

            <div className="mt-5">
                <h2>Comptes</h2>
                <div className="row">
                    <div className="col my-5">
                        <h3 className="text-center">Comptes bancaires</h3>
                        {/* Sera refait en mapping */}
                        <div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>Compte A</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value="1111.11"/>
                        </div>
                        
                        <div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>Compte B</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}} placeholder="Montant exact" value="222.22"/>
                        </div>
                        <button>+ Ajouter</button>
                    </div>

                    <div className="col my-5">
                        <h3 className="text-center">Cartes de crédits</h3>
                        <div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>Crédit A</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}}placeholder="Montant exact" value="-333.33"/>
                        </div>
                        <button>+ Ajouter</button>
                    </div>
                    
                    <div className="col my-5">
                        <h3 className="text-center">Divers</h3>
                        <div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>Comptant</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}}placeholder="Montant exact" value="1.75"/>
                        </div>

                        <div className="input-group mb-3" style={{maxWidth: '350px', maxHeight: '35px'}}>
                            <span className="input-group-text" style={{minWidth: '100px'}}>Tirelire</span>
                            <input type="text" className="form-control" aria-label="Montant exact" style={{minWidth: '120px'}}placeholder="Montant exact" value="73.00"/>
                        </div>
                        <button>+ Ajouter</button>
                    </div>
                    
                    <hr />

                    <h2>Prêts</h2>
                    <div className="row">
                        <div className="col my-5">
                            <button>+ Ajouter</button>
                        </div>
                    </div>

                    <hr />

                    <h2>Épargnes</h2>
                    <div className="row">
                        <div className="col my-5">
                            <button>+ Ajouter</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Actifs;