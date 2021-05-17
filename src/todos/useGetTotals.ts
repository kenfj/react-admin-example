import { useGetList } from "react-admin"

type Totals = { [key: string]: number }

const useGetTotals = (filterValues: any): Totals => {
  const { total: totalCompleted } = useGetList(
    'todos',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    { ...filterValues, completed: true }
  )
  const { total: totalNotCompleted } = useGetList(
    'todos',
    { perPage: 1, page: 1 },
    { field: 'id', order: 'ASC' },
    { ...filterValues, completed: false }
  )

  return {
    Completed: totalCompleted || 0,
    NotCompleted: totalNotCompleted || 0,
  }
}

export default useGetTotals
