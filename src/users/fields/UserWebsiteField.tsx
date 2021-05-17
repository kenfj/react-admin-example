import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import React from "react";
import { useRecordContext } from "react-admin";
import { User } from "../../Types";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2,
  },
})

export const UserWebsiteField = () => {
  const classes = useStyles()
  const record = useRecordContext<User>()

  return (
    <Link href={`https://${record.website}`} target="_blank" rel="noreferrer" className={classes.link}>
      {record.website}
      <LaunchIcon className={classes.icon} />
    </Link>
  )
}

UserWebsiteField.defaultProps = {
  label: "Website",
  addLabel: true,
}
