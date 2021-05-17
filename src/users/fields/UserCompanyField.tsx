import { useRecordContext } from "react-admin"
import { User } from "../../Types"

export const UserCompanyField = () => {
  const record = useRecordContext<User>()
  const company = record.company

  return (
    <>{company.name} [{company.catchPhrase}] {company.bs}</>
  )
}

UserCompanyField.defaultProps = {
  label: "Company",
  addLabel: true,
}
