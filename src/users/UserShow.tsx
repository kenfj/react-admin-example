import React from "react"
import { EmailField, Show, ShowProps, SimpleShowLayout, TextField } from "react-admin"
import { UserAddressField, UserCompanyField, UserMapField, UserWebsiteField } from "./fields"

const UserShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <EmailField source="email" />
      <UserAddressField />
      <UserMapField />
      <TextField source="phone" />
      <UserWebsiteField />
      <UserCompanyField />
    </SimpleShowLayout>
  </Show>
)

export default UserShow
