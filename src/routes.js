import One from './Components/Parts/One';
import Two from './Components/Parts/Two';

const routes = [
    { path: '/', component: One, exact : true },
    { path: '/two', component: Two,},
  ];
  
  export default routes;