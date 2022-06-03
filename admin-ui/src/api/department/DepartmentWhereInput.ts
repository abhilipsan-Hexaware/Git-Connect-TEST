import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
