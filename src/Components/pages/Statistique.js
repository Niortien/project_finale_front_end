import React, { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import './Statistique.css';
import Chart from 'chart.js/auto';

function Statistiques() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Données de l'exemple
    const data = {
      labels: ['Cocody', 'Abobo', 'Yopougon', 'Bouaké'],
      datasets: [{
        label: 'Repartition de Vehicules',
        data: [10, 15, 8, 19], // Exemple de données pour le nombre de véhicules par agence
        backgroundColor: ['orange', 'green', 'blue', 'red'], // Couleurs des barres pour chaque agence
        borderColor: 'rgba(0, 0, 0, 0)', // Couleur de bordure transparente
      }]
    };

    // Configuration du graphique
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0, // Enlève la boîte autour des étiquettes
            }
          }
        }
      }
    };

    // Création du graphique avec Chart.js
    const chart = new Chart(chartRef.current, config);

    // Nettoyage du graphique lors du démontage du composant
    return () => chart.destroy();
  }, []);
  return (
    <div className="statistiques-container">
      <Navigation />
      <div className="statistiques">
        <div className="statistique orange">
          <h5>Nombre total de véhicules</h5>
          <p className='nb'>10</p>
        </div>
        <div className="statistique green">
          <h5>Nombre total d'agences</h5>
          <p className='nb'>3</p>
        </div>
        <div className="statistique blue">
          <h5>Nombre total de clients</h5>
          <p className='nb'> 20</p>
        </div>
        <div className="statistique red">
          <h5> le carburant</h5>
          <p className='nb'>100</p>
        </div>
      </div>

      <div className="graph-container">
        <canvas ref={chartRef}></canvas>
      </div>

    </div>
  );
}

export default Statistiques;
