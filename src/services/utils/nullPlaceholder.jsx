export function nullPlaceholder(str) {
  if (str?.length < 1) {
    return "No Data";
  }
  return str;
}
