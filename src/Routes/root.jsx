import { Outlet } from 'react-router-dom';
import PageHeader from '../Components/Layout/PageHeader';

function Root() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Root;
