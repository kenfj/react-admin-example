import { ListProps } from "ra-ui-materialui";
import React from "react";
import { Datagrid, List, ReferenceField, TextField } from "react-admin";
import PostFilter from "./PostFilter";

const PostList = (props: ListProps) => (
  <List {...props}
    filters={<PostFilter />}
    bulkActionButtons={false}>

    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link={false}>
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>

  </List>
)

export default PostList
