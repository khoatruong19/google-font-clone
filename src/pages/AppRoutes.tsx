import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from './constants';
import DefaultLayout from '../layouts/DefaultLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((route) => {
        const PageLayout = route?.layout ? route.layout : DefaultLayout;
        const { component: Component, name, path, customLayoutClassName = "" } = route;

        return (
          <Route
            key={name}
            path={path}
            element={
              <PageLayout customClassName={customLayoutClassName}>
                <Component/>
              </PageLayout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
