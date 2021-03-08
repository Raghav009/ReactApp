import Hooks from './Hooks/Hooks';
import LazyC from "./Lazy/Lazy";
import Rest from "./Examples/Rest";
import Event from './Events/Event';
import TodoApp from './Redux-components/TodoApp';
import ReduxHooks from "./Examples/ReduxHooks";
import ReduxC from "./Examples/Other";
import Question from "./Questions/Questions";
import MultiRoute, { Comp1, Comp2 } from "./Questions/MultiRoute";
import Event2 from "./Events/Event2";
import Go from './Go/Example1';
import ExM from './Examples/Prop';

const Routes = [
    {
      path: '/',
      component: Hooks
    },
    {
      path: '/lazy',
      component: LazyC
    },
    {
      path: '/example',
      component: Rest
    },
    {
      path: '/events',
      component: Event
    },
    {
      path: '/redux',
      component: TodoApp
    },
    {
      path: '/reduxhooks',
      component: ReduxHooks
    },
    {
      path: '/redux2',
      component: ReduxC
    },
    {
      path: '/questions/:name',
      component: Question
    },
    // {
    //   path: '/multi',
    //   component: MultiRoute,
    //   routes : [
    //       {
    //           path:'/multi/Comp1',
    //           component: Comp1
    //       },
    //       {
    //           path : '/multi/Comp2',
    //           component: Comp2
    //       }
    //   ]
    // },
    {
      path: '/events2/:js',
      component: Event2
    },
    {
      path:'/Go',
      component : Go
    },
    {
      path : '/Ex1',
      component: ExM
    }
  ]

  export default Routes;