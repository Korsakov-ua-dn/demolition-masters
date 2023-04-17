type Arg = number | null;

export function getTotal(l: Arg, w: Arg, h: Arg, b: number) {
  if (l && w && h) {
    return l * w * h * b;
  }
}
