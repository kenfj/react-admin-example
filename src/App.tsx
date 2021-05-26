import ListIcon from '@material-ui/icons/List';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import jsonServerProvider from 'ra-data-json-server';
import React, { useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';
import GithubCorner from 'react-github-corner';
import Dashboard from './dashboard/Dashboard';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import TodoList from './todos/TodoList';
import UserList from './users/UserList';
import UserShow from './users/UserShow';

function App() {
  //https://jsonplaceholder.typicode.com/guide/
  const [dataProvider] = useState<DataProvider>(
    () => jsonServerProvider('https://jsonplaceholder.typicode.com')
  )

  // ListGuesser EditGuesser ShowGuesser are available
  // Note: ShowGuesser need /show in the URL
  // https://github.com/marmelab/react-admin/issues/4833

  const sourceUrl = 'https://github.com/kenfj/react-admin-example'

  return (
    <>
      <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource name="users" list={UserList} icon={PeopleIcon} show={UserShow} options={{ label: 'User List' }} />
        <Resource name="posts" list={PostList} icon={MessageIcon} show={PostShow} />
        <Resource name="todos" list={TodoList} icon={ListIcon} />
      </Admin>
      <GithubCorner href={sourceUrl} size={45} />
    </>
  )
}

export default App;
