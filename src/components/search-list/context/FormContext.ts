// form-context.ts file
import { createFormContext } from "@mantine/form";
import { ISearchFormValues } from "../../../helpers/types";

export const [SearchFormProvider, useSearchFormContext, useSearchForm] =
  createFormContext<ISearchFormValues>();
