
import React from 'react';
import { RouteComponentProps, Route, Redirect, RouteProps } from "react-router";
import { APP_ROUTES } from '../models/RoutingPaths';

interface PrivateRoutingProps {
    component: React.ReactType;
    path: any;
    props: any;
    user?: any;
    exact?: boolean;
}

export const PrivateRouting: React.SFC<PrivateRoutingProps> = ({ component: C, props, path, exact, user, ...rest }) => {
    return <Route {...rest} exact={exact}
        render={(p: RouteComponentProps<any>): React.ReactNode => {
            if (user && user.token) {
                return <C {...props}{...p} />;
            }

            return <Redirect to={user && user.token ? path : APP_ROUTES.HOME} />
        }
        } />
}

interface RoutingProps {
    component: React.ReactType;
    path: any;
    props: any;
    exact?: boolean;
}

export const Routing: React.SFC<RoutingProps> = ({ component: C, props, path, exact, ...rest }) => {
    return <Route {...rest} exact={exact}
        render={(p: any): React.ReactNode => {
            return <C {...props}{...p} />;
        }
        } />
}

