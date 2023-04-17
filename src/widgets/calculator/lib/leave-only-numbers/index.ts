export function leaveOnlyNumbers(string: string) {
  const numberPattern = /\d+/g;
  const res = string.match(numberPattern)?.join('');

  if (!res) {
    return 0;
  }

  return res;
}
