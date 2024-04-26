import React from 'react';
import user1 from '../assets/j.png';
import user2 from '../assets/j.png';
import user3 from '../assets/j.png';
import { FaStar } from 'react-icons/fa';

function Avis() {
  const reviews = [
    {
      id: 1,
      user: 'John Doe',
      avatar: user1,
      date: 'April 15, 2024',
      stars: 5,
      comment: "Le service à l'Hôtel Monteleone était exceptionnel. Aucun problème n'a été négligé et tous les problèmes ont été résolus rapidement et avec des résultats satisfaisants. Nous avons été particulièrement impressionnés par la façon dont le personnel de l'hôtel anticipait nos besoins (en venant périodiquement nous voir dans la salle de réunion pour prendre de nos nouvelles)",
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: user2,
      date: 'April 18, 2024',
      stars: 4,
      comment: "Le service à l'Hôtel Monteleone était exceptionnel. Aucun problème n'a été négligé et tous les problèmes ont été résolus rapidement et avec des résultats satisfaisants. Nous avons été particulièrement impressionnés par la façon dont le personnel de l'hôtel anticipait nos besoins (en venant périodiquement nous voir dans la salle de réunion pour prendre de nos nouvelles)",
    },
    {
      id: 3,
      user: 'David Brown',
      avatar: user3,
      date: 'April 20, 2024',
      stars: 5,
      comment: "Le service à l'Hôtel Monteleone était exceptionnel. Aucun problème n'a été négligé et tous les problèmes ont été résolus rapidement et avec des résultats satisfaisants. Nous avons été particulièrement impressionnés par la façon dont le personnel de l'hôtel anticipait nos besoins (en venant périodiquement nous voir dans la salle de réunion pour prendre de nos nouvelles)",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Vos Avis</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map(review => (
          <div key={review.id} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-500 text-sm">{review.date}</span>
              <div className="flex">
                {[...Array(review.stars)].map((star, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-justify mb-4">"{review.comment}"</p>
            <div className="flex items-center">
              <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full mr-2" />
              <span className="text-lg font-semibold">{review.user}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avis;
