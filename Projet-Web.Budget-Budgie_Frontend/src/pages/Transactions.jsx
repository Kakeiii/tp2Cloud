import 'react';
import Navbar from '../navbar/Navbar';

function Transactions() {
    return (
        <div>
            <Navbar/>
            <h2 className="mt-5">Transactions</h2>

            <table className="table table-success table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Détail</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><input type="text" style={{fontWeight: 'bold'}} className="form-control" aria-label="Date" placeholder="JJ/MM/AAAA" value="01/02/2025"/></th>
                        <td>
                            <select className="form-select" aria-label="categories">
                                <option value="1">Choisir...</option>
                                <option selected>Loyer</option>
                                <option value="3">Épicerie</option>
                                <option value="4">Café</option>
                                <option value="4">+ Nouvelle catégorie</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="details">
                                <option value="1">Choisir...</option>
                                <option selected>-</option>
                                <option value="3">Métro</option>
                                <option value="4">IGA</option>
                                <option value="5">Starbucks</option>
                                <option value="6">+ Ajouter détail</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" placeholder="Montant" value="-4550.00"/></td>
                        <td>Comptes mensuels</td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="text" style={{fontWeight: 'bold'}} className="form-control" aria-label="Date" placeholder="JJ/MM/AAAA" value="21/02/2025"/></th>
                        <td>
                            <select className="form-select" aria-label="categories">
                                <option value="1">Choisir...</option>
                                <option value="2">Loyer</option>
                                <option selected>Épicerie</option>
                                <option value="4">Café</option>
                                <option value="5">+ Nouvelle catégorie</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="details">
                                <option value="1">Choisir...</option>
                                <option value="2">-</option>
                                <option selected>Métro</option>
                                <option value="4">IGA</option>
                                <option value="5">Starbucks</option>
                                <option value="6">+ Ajouter détail</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" placeholder="Montant" value="-77.23"/></td>
                        <td>Dépenses quotidiennes</td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="text" style={{fontWeight: 'bold'}} className="form-control" aria-label="Date" placeholder="JJ/MM/AAAA" value="23/02/2025"/></th>
                        <td>
                            <select className="form-select" aria-label="categories">
                                <option value="1">Choisir...</option>
                                <option value="2">Loyer</option>
                                <option selected>Épicerie</option>
                                <option value="4">Café</option>
                                <option value="5">+ Nouvelle catégorie</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="details">
                                <option value="1">Choisir...</option>
                                <option value="2">-</option>
                                <option value="3">Métro</option>
                                <option selected>IGA</option>
                                <option value="5">Starbucks</option>
                                <option value="6">+ Ajouter détail</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" placeholder="Montant" value="-5.90"/></td>
                        <td>Dépenses quotidiennes</td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="text" style={{fontWeight: 'bold'}} className="form-control" aria-label="Date" placeholder="JJ/MM/AAAA" value="23/02/2025"/></th>
                        <td>
                            <select className="form-select" aria-label="categories">
                                <option value="1">Choisir...</option>
                                <option value="2">Loyer</option>
                                <option value="3">Épicerie</option>
                                <option selected>Café</option>
                                <option value="5">+ Nouvelle catégorie</option>
                            </select>
                        </td>
                        <td>
                            <select className="form-select" aria-label="details">
                                <option value="1">Choisir...</option>
                                <option value="2">-</option>
                                <option value="3">Métro</option>
                                <option value="4">IGA</option>
                                <option selected>Starbucks</option>
                                <option value="6">+ Ajouter détail</option>
                            </select>
                        </td>
                        <td><input type="text" className="form-control" placeholder="Montant" value="-50.64"/></td>
                        <td>Dépenses quotidiennes</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-success">+ Ajouter</button>
        </div>
    );
}

export default Transactions;