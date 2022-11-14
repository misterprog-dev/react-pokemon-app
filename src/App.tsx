import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import PokemonCreate from "./pages/pokemon-create";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonList from "./pages/pokemon-list";

const App: FunctionComponent = () => {

    return (
       <Router>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={PokemonList}/>
                    <Route exact path="/pokemons" component={PokemonList}/>
                    <Route path="/pokemons/:id" component={PokemonsDetail} />
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <Route exact path="/pokemon/create" component={PokemonCreate} />
                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </div>
       </Router>
    );
}

export default App;