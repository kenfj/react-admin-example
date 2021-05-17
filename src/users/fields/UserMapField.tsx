import { useRecordContext } from "react-admin"
import { User } from "../../Types"
import { Map } from '../../components';

export const UserMapField = () => {
  const record = useRecordContext<User>()

  const lat = Number(record.address.geo.lat)
  const lng = Number(record.address.geo.lng)

  return (
    <Map center={[lat, lng]} zoom={1} style={{ width: 300, height: 200 }} />
  )
}

UserMapField.defaultProps = {
  label: "Map",
  addLabel: false,
}
