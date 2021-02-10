export const findCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(({ results }) => results.map(result => ({
      id: result.id,
      name: result.name,
      image: result.image
    })))
  ;
};

export const findOneCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      name: json.name,
      image: json.image,
      status: json.status,
      species: json.species,
      origin: json.origin.name
    }));
};
