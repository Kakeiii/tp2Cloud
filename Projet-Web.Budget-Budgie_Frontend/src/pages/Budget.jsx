import 'react';
import Jour from '../time/Jour';
import Navbar from '../navbar/Navbar';
function Budget() {
    return (
        
        <div>
            <Navbar />
            <h2 className="mt-5" >Budget</h2>
            <Jour />

            <div className="container">
                <div className="d-flex">
                    <div className="column" style={{minWidth: '1000px'}}>

                        <h3>Revenus</h3>
                        <div className="column input-group mb-3" style={{minWidth: '350px', height: '35px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '175px'}}>Revenu mensuel</span>
                            </div>
                                <input type="text" className="form-control" aria-label="Montant estimé" placeholder="Montant estimé" style={{maxWidth: '150px'}}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <h3>Dépenses</h3>
                        <div className="column input-group mb-3" style={{minWidth: '350px', height: '35px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '175px'}}>Loyer / Hypothèque</span>
                            </div>
                                <input type="text" className="form-control" aria-label="Montant estimé" placeholder="Montant estimé" style={{maxWidth: '150px'}}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="column input-group mb-3" style={{minWidth: '350px', height: '35px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '175px'}}>Électricité</span>
                            </div>
                                <input type="text" className="form-control" aria-label="Montant estimé" placeholder="Montant estimé" style={{maxWidth: '150px'}}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="column input-group mb-3" style={{minWidth: '350px', height: '35px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '175px'}}>Épicerie</span>
                            </div>
                                <input type="text" className="form-control" aria-label="Montant estimé" placeholder="Montant estimé" style={{maxWidth: '150px'}}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="column input-group mb-3" style={{minWidth: '350px', height: '35px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{width: '175px'}}>Internet</span>
                            </div>
                                <input type="text" className="form-control" aria-label="Montant estimé" placeholder="Montant estimé" style={{maxWidth: '150px'}}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Budget;