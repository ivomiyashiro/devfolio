import { GraphQLLogo, NextLogo, NodeLogo, PrismaLogo, MongoLogo, NestLogo, TailwindLogo } from '@/components/ui'

interface ADAPTED_PROJECT_ITEM extends PROJECT_ITEM {
  IMAGES: string[]
  LOGOS: any[]
}

export const adaptProjectsData = (data: PROJECT_ITEM[]): ADAPTED_PROJECT_ITEM[] => {
  return data.map(project => {
    if (project.NAME === 'Ryutech') {
      return {
        ...project,
        IMAGES: [
          'public/ryutech/ryutech-ecommerce-1.webp',
          'public/ryutech/ryutech-ecommerce-2.webp',
          'public/ryutech/ryutech-ecommerce-3.webp',
          'public/ryutech/ryutech-ecommerce-4.webp',
          'public/ryutech/ryutech-ecommerce-5.webp',
          'public/ryutech/ryutech-ecommerce-6.webp'
        ],
        LOGOS: [
          NextLogo,
          TailwindLogo,
          GraphQLLogo
        ]
      }
    } else if (project.NAME === 'NoBugs Books') {
      return {
        ...project,
        IMAGES: [
          'public/nobugs-books/nobugs-books-1.webp',
          'public/nobugs-books/nobugs-books-2.webp',
          'public/nobugs-books/nobugs-books-3.webp',
          'public/nobugs-books/nobugs-books-4.webp',
          'public/nobugs-books/nobugs-books-5.webp',
          'public/nobugs-books/nobugs-books-6.webp'
        ],
        LOGOS: [
          NextLogo,
          NestLogo,
          PrismaLogo
        ]
      }
    } else {
      return {
        ...project,
        IMAGES: [
          'public/gymrat/gymrat-1.webp',
          'public/gymrat/gymrat-6.webp',
          'public/gymrat/gymrat-2.webp',
          'public/gymrat/gymrat-4.webp',
          'public/gymrat/gymrat-3.webp',
          'public/gymrat/gymrat-5.webp'
        ],
        LOGOS: [
          NextLogo,
          MongoLogo,
          NodeLogo
        ]
      }
    }
  })
}
