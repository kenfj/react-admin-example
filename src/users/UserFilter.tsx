import React from 'react'
import { AutocompleteInput, Filter, FilterProps, ReferenceInput, TextInput } from 'react-admin'

const UserFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Username" source="id" reference="users">
      <AutocompleteInput optionText="username" />
    </ReferenceInput>
  </Filter>
)

UserFilter.defaultProps = {
  children: []
}

export default UserFilter
