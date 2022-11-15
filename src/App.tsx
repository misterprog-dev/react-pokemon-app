import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/login";
import PageNotFound from "./pages/page-not-found";
import PokemonCreate from "./pages/pokemon-create";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonList from "./pages/pokemon-list";
import PrivateRoute from "./PrivateRoute";

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
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={PokemonList}/>
                    <PrivateRoute exact path="/pokemons" component={PokemonList}/>
                    <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
                    <PrivateRoute exact path="/pokemon/edit/:id" component={PokemonEdit} />
                    <PrivateRoute exact path="/pokemon/create" component={PokemonCreate} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
       </Router>
    );
}

export default App;