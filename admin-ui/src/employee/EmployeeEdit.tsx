import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
