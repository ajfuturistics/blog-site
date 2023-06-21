import { defaultThemes } from "react-data-table-component";

export const customStyles = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: defaultThemes.default.divider.default,
    },
  },
  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
      "&": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
        borderLeftStyle: "solid",
        borderLeftWidth: "1px",
        borderLeftColor: defaultThemes.default.divider.default,
        background: "#ecfeff",
        fontWeight: "700",
      },
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
      "&": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
        borderLeftStyle: "solid",
        borderLeftWidth: "1px",
        borderLeftColor: defaultThemes.default.divider.default,
      },
    },
  },
};
