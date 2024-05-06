import React from 'react'
import List from './List';
import DeleteConfirmation from './DeleteConfirmation';
import Pagination from './Pagination';

const Dashboard = () => {
  return (
    <>
        <List />
        <DeleteConfirmation />
        <Pagination />
    </>
  )
}

export default Dashboard