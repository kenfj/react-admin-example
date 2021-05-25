import Link from '@material-ui/core/Link';
import React from "react";
import { FunctionField, Record, ReferenceField, RichTextField, Show, ShowActionsProps, ShowProps, SimpleShowLayout, TextField, TitleProps, TopToolbar } from "react-admin";

const Title = ({ record }: TitleProps) => (
  <span>
    {record ? `Posts[${record.id}] "${record.title}"` : 'Posts not found'}
  </span>
)

const Actions = ({ basePath, data, resource }: ShowActionsProps) => (
  <TopToolbar>
    <Link href={`./#${basePath}?filter={"userId":${data?.userId}}`}>
      <>Other Posts From Same User</>
    </Link>
  </TopToolbar>
)

const PostShow = (props: ShowProps) => (
  <Show title={<Title />} actions={<Actions />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="PostId" />
      <ReferenceField source="userId" reference="users" link="show">
        <FunctionField render={(record?: Record) => (
          <>[{record?.id}] {record?.username} ({record?.name})</>
        )} />
      </ReferenceField>
      <TextField source="title" />
      <RichTextField source="body" />
    </SimpleShowLayout>
  </Show>
)

export default PostShow
