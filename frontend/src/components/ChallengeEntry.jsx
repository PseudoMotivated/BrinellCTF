
import React, { useState } from 'react';

const ChallengeEntry = ({ challenge }) => {
  const [showHints, setShowHints] = useState(false);

  return (
    <div className='challenge' >
      <h3 style={{ marginTop: 0 }}>{challenge.name}</h3>
      <p><strong>Category:</strong> {challenge.category}</p>
      <p>{challenge.description}</p>
      <p><strong>Points:</strong> {challenge.points}</p>
      
      <button onClick={() => setShowHints(!showHints)}>
        {showHints ? 'Hide Hints' : 'Show Hints'}
      </button>
      
      {showHints && (
        <div style={{ marginTop: '1em'}}>
          <h4>Hints:</h4>
          <ul style={{listStyleType: 'none'}}>
            {challenge.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChallengeEntry;