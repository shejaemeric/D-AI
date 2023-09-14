export function pxToEm(size) {
  return size / 16 + "rem";
}

export function pxToVw(size) {
  return (size / 1440) * 100 + "vw";
}
