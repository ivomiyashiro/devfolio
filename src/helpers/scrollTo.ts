export const scrollTo = (to: string, block: ScrollLogicalPosition) => {
  const section = document.querySelector(`${to.toLowerCase()}`)
  section?.scrollIntoView({ behavior: 'smooth', block })
}
