import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Datagrid, ReferenceManyField, Show, ShowProps, Tab, TabbedShowLayout, TextField, useShowController } from "react-admin";
import { User } from "../Types";
import { UserAddressField, UserCompanyField, UserMapField, UserWebsiteField } from './fields';

const useStyles = makeStyles({
  root: { width: '80%', margin: 'auto' },
})

const UserExpand = (props: ShowProps) => {
  const classes = useStyles()
  const controllerProps = useShowController<User>(props)
  const { record } = controllerProps

  if (record === undefined) return <></>

  return (
    <Show {...controllerProps} {...props}>
      <TabbedShowLayout syncWithLocation={false} className={classes.root}>
        <Tab label="Details">
          <UserAddressField />
          <UserMapField />
          <UserCompanyField />
          <UserWebsiteField />
        </Tab>
        <Tab label="Posts">
          <ReferenceManyField reference="posts" target="userId" addLabel={false}>
            <Datagrid rowClick="show">
              <TextField source="id" />
              <TextField source="title" />
              <TextField source="body" />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default UserExpand
