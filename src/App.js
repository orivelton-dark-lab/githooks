import React, { useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1'},
    { id: 2, name: 'repo-2'},
    { id: 3, name: 'repo-3'},
  ]);

  const handleAddRepository = () => {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: 'New Repositorie' }
    ])
  };

  return (
    <>
      <ul>
        {repositories.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          )
        )}
      </ul>
      <button onClick={handleAddRepository}>
        Add repositories
      </button>
    </>
  );
}

export default App;
