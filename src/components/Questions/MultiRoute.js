import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

const MultiRoute = ({ routes }) => {

    const { path } = useRouteMatch();

    return (
        <div>
            Multi Route Components
            {/*  /multi route */}
            <Switch>
                {/* {
                        routes && routes.map((e,i)=>{
                            return <Route key={i} exact path={e.path} component={e.component}/>
                        })
                    } */}
                <Route path={`${path}/Comp1`} component={Comp1} />
                <Route path={`${path}/Comp2`} component={Comp2} />
            </Switch>

        </div>
    )
}

const Comp1 = () => {
    return (
        <div>
            Display Component 1
        </div>
    )
}

const Comp2 = () => {
    return (
        <div>
            Display Component 2
        </div>
    )
}

export { Comp1, Comp2 };

export default MultiRoute;

