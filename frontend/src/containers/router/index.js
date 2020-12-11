import React, { memo } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import AllEnviroment from '../../pages/allEnviroment';
import DevEnviroment from '../../pages/devEnviroment';
import Login from '../../pages/login';
import Manage from '../../pages/manage';
import Subscription from '../../pages/subscription';
import UserDetail from '../../pages/userDetail';

//components
import Historial from '../../components/historial';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import TaskDetail from '../../components/task-detail';
import WikiSection from '../../components/wikiSection';
import UserManagement from '../../components/userManagement';
import EnviromentSection from '../../components/enviromentSection';

// Local
import useHistorialActions from '../../store/historial/actions';
import useAuth from '../../store/auth/actions';
import useSidebarActions from '../.././store/sidebar/actions';

function Router() {
  const {
    state: { user },
  } = useAuth();

  const { state: historialState } = useHistorialActions();
  const { state: sidebarState, } = useSidebarActions(); //tomado del index de sidebar
  return (
    <BrowserRouter>
      <div className='container'>
        {!user ? (
          <Switch>
            <Route exact path='/' component={Login} />
            <Redirect to='/' />
          </Switch>
        ) : (
          <div
            //código tomado del index de sidebar
          className={
        sidebarState.isSidebarExpanded
          ? 'main-content-exp'
          : 'main-content'
      }
          >
            <Navbar />
            <Sidebar />
            <div className='app'>
              {historialState.isHistorialVisible && <Historial />}
              <Switch>
                <Route exact path='/' component={Manage} />
                <Route path='/subscription' component={Subscription} />
                <Route path='/all-enviroment' component={AllEnviroment} />
                <Route path='/dev-enviroment' component={DevEnviroment} />
                <Route path='/task-detail/:id' component={TaskDetail} />
                <Route path='/wikiSection' component={WikiSection} />
                <Route exact path='/user/details' component={UserDetail} />
                <Route path='/userManagement' component={UserManagement} />
                <Route
                  path='/enviromentSection'
                  component={EnviromentSection}
                />
              </Switch>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default memo(Router);
