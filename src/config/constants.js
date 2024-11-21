import { swatch, fileIcon, clothes, logoShirt, stylishShirt, right, left, up, down, add, minus } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "clothpicker",
    icon: clothes,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalEditetabs = [
  {
    name: "right",
    icon: right,
  },
  {
    name: "left",
    icon: left,
  },
  {
    name: "up",
    icon: up,
  },
  {
    name: "down",
    icon: down,
  },
  {
    name: "add",
    icon: add,
  },
  {
    name: "minus",
    icon: minus,
  }   
]

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fulDecal",
    filterTab: "stylishShirt",
  },
};
