import { swatch, fileIcon, clothes, logoShirt, stylishShirt, right, left, up, down, add, minus, leftR, rightR, move, reset } from "../assets";

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
    name: "RotateLeft",
    icon: leftR,
  },
  {
    name: "up",
    icon: up,
  },
  {
    name: "RotateRight",
    icon: rightR,
  },
  {
    name: "left",
    icon: left,
  },
  {
    name: "reset",
    icon: reset,
  },
  {
    name: "right",
    icon: right,
  },
  {
    name: "add",
    icon: add,
  },
  {
    name: "down",
    icon: down,
  },
  {
    name: "minus",
    icon: minus,
  },

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

export const MoveTab = {name: "move", icon: move};
