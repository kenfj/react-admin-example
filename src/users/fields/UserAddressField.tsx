import { useRecordContext } from "react-admin"
import { User } from "../../Types"

export const UserAddressField = () => {
  const record = useRecordContext<User>()
  const address = record.address

  return (
    <>{address.street}, {address.suite}, {address.city}, {address.zipcode}</>
  )
}

UserAddressField.defaultProps = {
  label: "Address",
  addLabel: true,
}
