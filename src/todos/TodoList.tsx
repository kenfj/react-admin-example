import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { ChangeEvent, useEffect, useState } from "react";
import { BooleanField, Datagrid, Identifier, List, ListContextProvider, ListProps, ReferenceField, TextField, useListContext } from "react-admin";
import TodoFilter from "./TodoFilter";
import useGetTotals from './useGetTotals';

// Material UI Tabs
// https://material-ui.com/components/tabs/

// Tabbed Datagrid
// https://github.com/marmelab/react-admin/blob/a7cf0bed93526f6ccb82a6adb351ef8e25b004fb/examples/demo/src/orders/OrderList.tsx
// https://marmelab.com/blog/2018/08/16/react-admin-2-2.html#code-classlanguage-textltlistgtcode-passes-the-same-props-to-all-its-children
// https://github.com/marmelab/react-admin/blob/496fb2ce242bc5be7e30f2ff1657357da14eb74d/examples/demo/src/commands/CommandList.js#L55-L173

const TodoList = (props: ListProps) => (
  <List {...props} filters={<TodoFilter />} bulkActionButtons={false}>
    <TabbedDatagrid />
  </List>
)

const TabbedDatagrid = () => {
  const [completedIds, setCompletedIds] = useState<Identifier[]>([] as Identifier[]);
  const [notCompletedIds, setNotCompletedIds] = useState<Identifier[]>([] as Identifier[]);

  const listContext = useListContext()
  const { ids, filterValues, setFilters, displayedFilters } = listContext
  // default value of completed is true
  const isCompleted = filterValues.completed === undefined || filterValues.completed

  useEffect(() => {
    switch (isCompleted) {
      case true:
        setCompletedIds(ids)
        break
      case false:
        setNotCompletedIds(ids)
        break
    }
  }, [ids, isCompleted])

  const handleChange = (event: ChangeEvent<{}>, value: string) => {
    setFilters({ ...filterValues, completed: value === 'Completed' }, displayedFilters)
  }

  const totals = useGetTotals(filterValues)
  const tabValue = isCompleted ? 'Completed' : 'NotCompleted'
  const selectedIds = isCompleted ? completedIds : notCompletedIds

  // c.f. https://material-ui.com/components/tabs/
  return (
    <>
      <Tabs value={tabValue} onChange={handleChange}>
        {['Completed', 'NotCompleted'].map(status => (
          <Tab key={status} value={status} label={`${status} (${totals[status]})`} />
        ))}
      </Tabs>

      <Divider />

      <TabPanel selectedIds={selectedIds} />
    </>
  )
}

const TabPanel = ({ selectedIds }: { selectedIds: Identifier[] }) => {
  const listContext = useListContext()
  const values = { filterValues: listContext.filterValues, ids: selectedIds }

  return (
    <Box p={3}>
      <ListContextProvider value={{ ...listContext, ...values }}>
        <Datagrid optimized>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users" link="show">
            <TextField source="username" />
          </ReferenceField>
          <TextField source="title" />
          <BooleanField source="completed" />
        </Datagrid>
      </ListContextProvider>
    </Box>
  )
}

export default TodoList
