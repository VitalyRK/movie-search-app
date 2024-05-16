import { Select } from "@mantine/core";
import { useSearchFormContext } from "../context/FormContext";
import { sortByList } from "../../../helpers/constants";

import classes from "./index.module.css";
import { useState } from "react";
import ArrowDownIcon from "../../ui/arrow-down-icon/ArrowDownIcon";
import ArrowUpIcon from "../../ui/arrow-up-icon/ArrowUpIcon";

function SortPanel() {
  const form = useSearchFormContext();
  const [isOpenSortPicker, setIsOpenSortPicker] = useState(false);

  return (
    <Select
      {...form.getInputProps("sortBy")}
      w={284}
      withCheckIcon={false}
      style={{ float: "right" }}
      label="Sort by"
      labelProps={{
        style: {
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "140%",
          marginBottom: "8px",
        },
      }}
      defaultValue={sortByList[1].label}
      data={sortByList}
      allowDeselect={false}
      onDropdownOpen={() => setIsOpenSortPicker(!isOpenSortPicker)}
      onDropdownClose={() => setIsOpenSortPicker(!isOpenSortPicker)}
      rightSection={!isOpenSortPicker ? <ArrowDownIcon /> : <ArrowUpIcon />}
      classNames={{ option: classes.option, input: classes.input }}
    />
  );
}

export default SortPanel;
