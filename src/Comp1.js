import React, { useState } from "react"; // Import du Link pour la navigation
import "./Composant1.css";

const Comp1 = () => {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [dateCirculation, setDateCirculation] = useState("");
  const [couleur, setCouleur] = useState("");
  const [showRecap, setShowRecap] = useState(false);

  const handleConfirm = () => {
    setShowRecap(true);
  };

  return (
    <div className="formulaire">
      <div className="gestion-voitures">
        <h1>Gestion Voitures</h1>
        <form>
          <label>
            Matricule:
            <input
              type="text"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
            />
          </label>
          <label>
            Marque:
            <input
              type="text"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
            />
          </label>
          <label>
            Date de mise en circulation:
            <input
              type="date"
              value={dateCirculation}
              onChange={(e) => setDateCirculation(e.target.value)}
            />
          </label>
          <label>
            Couleur:
            <input
              type="text"
              value={couleur}
              onChange={(e) => setCouleur(e.target.value)}
            />
          </label>
          <button className="bttttn" type="button" onClick={handleConfirm}>
            Confirmer
          </button>
        </form>

        {showRecap && (
          <div className="recapitulatif">
            <h2>Récapitulatif des informations :</h2>
            <ul className="listeul">
              <li className="listerrr">Matricule : {matricule}</li>
              <li className="listerrr">Marque : {marque}</li>
              <li className="listerrr">
                Date Mise en circulation : {dateCirculation}
              </li>
              <li className="listerrr">Couleur : {couleur}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comp1;
