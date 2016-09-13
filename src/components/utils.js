export function preventDefault(event) {
  if (event && event.preventDefault) event.preventDefault()
}
export function ternVal(onTrue, onFalse) {
  return condition => condition && onTrue || onFalse
}
