// form-context.ts file
import { createFormContext } from "@mantine/form";

interface SearchFormValues {
  searchField: string;
  genres: string[];
}

export const [UserFormProvider, useUserFormContext, useUserForm] =
  createFormContext<SearchFormValues>();
