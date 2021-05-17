import React from 'react'
import { AutocompleteInput, Filter, FilterProps, ReferenceInput, TextInput } from 'react-admin'

const PostFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Username" source="userId" reference="users" allowEmpty>
      <AutocompleteInput optionText="username" />
    </ReferenceInput>
  </Filter>
)

PostFilter.defaultProps = {
  children: []
}

export default PostFilter
