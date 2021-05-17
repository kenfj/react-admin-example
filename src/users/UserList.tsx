import React from "react";
import { Datagrid, EmailField, List, ListProps, TextField } from "react-admin";
import { UserWebsiteField } from "./fields";
import UserExpand from "./UserExpand";
import UserFilter from "./UserFilter";

const UserList = (props: ListProps) => (
  <List {...props}
    title="List of Users"
    filters={<UserFilter />}
    // default sort example
    sort={{ field: 'username', order: 'asc' }}
    // list level filter example
    // filter={{ "address.city": "McKenziehaven" }}
    bulkActionButtons={false}>

    <Datagrid rowClick="expand" expand={<UserExpand />}>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <TextField source="address.city" label="City" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="company.name" label="CompanyName" />
      <UserWebsiteField />
    </Datagrid>

  </List>
)

export default UserList
