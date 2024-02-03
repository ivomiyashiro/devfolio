export const SECTIONS_IDS = [
  'ABOUT',
  'EXPERIENCE',
  'PROJECTS',
  'SKILLS'
]

export const adaptHeaderItems = (headerItems: string[]) => {
  return headerItems.map((text, index) => ({
    id: SECTIONS_IDS[index],
    text
  }))
}
