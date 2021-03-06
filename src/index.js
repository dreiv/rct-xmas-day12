import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { unstable_createResource as createResource } from "react-cache";
import ErrorBoundary from "./error-boundary";
import {
  List as PokemonList,
  ListItem as PokemonListItem,
  Detail as PokemonDetail,
  ListFallback as PokemonListFallback,
  ListError as PokemonListError
} from "./pokemon";

function App() {
  let [selectedPokemonId, setSelectedPokemonId] = useState(1);

  return (
    <div>
      <h1>
        <span role="img" aria-label="React Holiday Twelve">
          ⚛️🎄✌️
        </span>
        : Day 12
      </h1>
      <ErrorBoundary fallback={<PokemonListError />}>
        <Suspense fallback={<PokemonListFallback />}>
          <PokemonDetail pokemonId={selectedPokemonId} />
          <ul>
            <PokemonList
              renderItem={pokemon => (
                <PokemonListItem
                  onClick={() => setSelectedPokemonId(pokemon.id)}
                  key={pokemon.id}
                >
                  {pokemon.name}
                </PokemonListItem>
              )}
            />
          </ul>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
