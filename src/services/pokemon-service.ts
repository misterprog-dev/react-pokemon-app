import Pokemon from "../models/pokemon";

export default class PokemonService {
    static baseURL: string = 'http://localhost:3001/pokemons';

    static getPokemons(): Promise<Pokemon[]> {
        return fetch(this.baseURL)
            .then(response => response.json())
            .catch(this.handleError);
    }

    static getPokemon(id: number): Promise<Pokemon | null> {
        return fetch(`${this.baseURL}/${id}`)
            .then(response => response.json())
            .then(data => this.isEmpty(data) ? null : data)
            .catch(this.handleError);
    }

    static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
        return fetch(`${this.baseURL}/${pokemon.id}`, {
            method: 'PUT',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(this.handleError);
    }

    static createPokemon(pokemon: Pokemon): Promise<Pokemon> {
        delete pokemon.created;

        return fetch(`${this.baseURL}/`, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(this.handleError);
    }

    static deletePokemon(pokemon: Pokemon): Promise<{}> {
        return fetch(`${this.baseURL}/${pokemon.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(this.handleError)
    }

    static searchPokemon(term: string): Promise<Pokemon[]> {
        return fetch(`${this.baseURL}?q=${term}`)
        .then(response => response.json())
        .catch(this.handleError);
    }

    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }

    static handleError(error: Error): void {
        console.error("Somme errors occured : ", error);
    }
}