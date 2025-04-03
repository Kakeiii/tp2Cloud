import 'react';

function Jour() {

    const mois = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ]

    const moisActuel = new Date().getMonth();
    const anneeActuelle = new Date().getFullYear();

    return (
        <div>
            <h3 className="text-center">← {mois[moisActuel]} {anneeActuelle} →</h3>
        </div>
    );
}

export default Jour;