import { lazy } from "react";

export const NotFound = lazy(async () => await import(/* webpackChunkName: "NotFound" */ './NotFound'));
export const Home = lazy(async () => await import(/* webpackChunkName: "Home" */ './Home'));
export const List = lazy(async () => await import(/* webpackChunkName: "Login" */ './List'));
