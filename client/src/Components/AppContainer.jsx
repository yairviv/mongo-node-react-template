import React, { useState } from 'react'; import {
    BrowserRouter as Router, Switch,
    Route
} from 'react-router-dom';
function AppContainer() {

    return (
        <div>Routing...</div>
        /*
        <Router> <div>
            <AppHeaderContextProvider value={headerOptions}>
                <AppHeader></AppHeader>
            </AppHeaderContextProvider>
            <Switch>
                <Route exact path="/"> <AppHeaderContextProvider value={headerOptions}>
                    <SongsContainer />
                </AppHeaderContextProvider>
                    ￼</Route>
                <Route path="/song" component={SongPage}>
                </Route>
                <Route path="/cart" component={cartContainer}></Route>
            </Switch>
        </div> </Router>
        */
    );
}
export default AppContainer;