import classes from "./routes.module.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import PreJunior from "./pages/PreJunior";
import TaskNav from "./pages/TaskNav";
import { CSSTransition} from "react-transition-group";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import TaskNavJun from "./pages/TaskNavJun";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";
import HW13 from "../h13/HW13";
import TaskNavJunPlus from "./pages/TaskNavJunPlus";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
  HW1: "/hw1",
  HW2: "/hw2",
  HW3: "/hw3",
  HW4: "/hw4",
  // add paths
};


const animatedRoutes = [
  { path: "/pre-junior/hw1", Component: HW1 },
  { path: "/pre-junior/hw2", Component: HW2 },
  { path: "/pre-junior/hw3", Component: HW3 },
  { path: "/pre-junior/hw4", Component: HW4 },
  { path: "/pre-junior/hw6", Component: HW6 }
];
const animatedRoutesJunior = [
  { path: "/junior/hw7", Component: HW7 },
  { path: "/junior/hw8", Component: HW8 },
  { path: "/junior/hw9", Component: HW9 },
  { path: "/junior/hw10", Component: HW10 },
  { path: "/junior/hw11", Component: HW11 },
  { path: "/junior/hw12", Component: HW12 },
];
const animatedRoutesJuniorPlus = [
  { path: "/junior-plus/hw13", Component: HW13 },

];

function Routes() {
  return (
    <div className={classes.Wrapper}>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>
        {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
        <Route
          path={"/"}
          exact
          render={() => <Redirect to={PATH.PRE_JUNIOR} />}
        />
        <Route path={PATH.PRE_JUNIOR} component={PreJunior}>
          <TaskNav />
          <div className={classes.TaskWrapper}>
            <Route
              path={"/pre-junior"}
              exact
              render={() => (
                <h2 className={classes.hello}>
                  Hello! This is my first react home tasks!
                </h2>
              )}
            />

            {animatedRoutes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={0}
                    classNames={classes.page} //"animate__animated animate__fadeInLeft"
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className={classes.page}>
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Route render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
          </div>
        </Route>
        <Route path={PATH.JUNIOR} component={Junior}>
          <TaskNavJun />
          <div className={classes.TaskWrapper}>
            <Route
              path={"/junior-plus"}
              exact
              render={() => (
                <h2 className={classes.hello}>
                  Hello! This is my first react home tasks!
                </h2>
              )}
            />
            {animatedRoutesJunior.map(({ path, Component }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={0}
                    classNames={classes.page} //"animate__animated animate__fadeInLeft"
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className={classes.page}>
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Route render={() => <Redirect to={PATH.JUNIOR} />} />
          </div>
        </Route>
        <Route path={PATH.JUNIOR_PLUS} component={JuniorPlus}>
          <TaskNavJunPlus />
          <div className={classes.TaskWrapper}>
            <Route
              path={"/junior"}
              exact
              render={() => (
                <h2 className={classes.hello}>
                  Hello! This is my first react home tasks!
                </h2>
              )}
            />
            {animatedRoutesJuniorPlus.map(({ path, Component }) => (
              <Route key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={0}
                    classNames={classes.page} //"animate__animated animate__fadeInLeft"
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className={classes.page}>
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            <Route render={() => <Redirect to={PATH.JUNIOR_PLUS} />} />
          </div>
        </Route>
        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </div>
  );
}

export default Routes;
