interface RootData {
  SEO_DESCRIPTION: string
  HEADER: string[]
  HERO: HERO
  ABOUT_ME: ABOUT
  EXPERIENCE: EXP
  PROJECTS: PROJECTS
  SKILLS: SKILLS
  CONTACT: CONTACT
  FOOTER: FOOTER
}

interface PROJECTS {
  TITLE: string
  PROJECTS_LIST: PROJECT_ITEM[]
}

interface PROJECT_ITEM {
  NAME: string
  DESCRIPTION: string
  GITHUB_LINK: string
  PROJECT_LINK: string
}

interface EXP {
  TITLE: string
  EXPERIENCES: EXPERIENCE[]
}

interface EXPERIENCE {
  JOB_TITLE: string
  COMPANY: COMPANY
  FROM_DATE: string
  TO_DATE: string
  RESPONSIBILITIES: string[]
}

interface COMPANY {
  NAME: string
  LINK: string
}

interface ABOUT {
  TITLE: string
  PARAGRAPH_1: {
    PART_1: string
    PART_2: string
  }
  PARAGRAPH_2: string
  PARAGRAPH_3: string
  PARAGRAPH_4: string
  SKILLS: string[]
}

interface HERO {
  RICH_TEXT: RICH_TEXT
  PRIMARY_BTN: string
  SECONDARY_BTN: string
}

interface RICH_TEXT {
  ACCENT: string
  TEXT: string
}

interface SKILLS {
  TITLE: string
}

interface CONTACT {
  TITLE: string
  TEXT: string
}

interface FOOTER {
  TEXT: string
}
