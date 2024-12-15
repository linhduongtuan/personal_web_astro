import { getCollection } from 'astro:content'
import type { BlogPostData } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export async function getSortedPosts(): Promise<
  { body: string; data: BlogPostData; slug: string }[]
> {
  const allBlogPosts = (await getCollection('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })) as unknown as { body: string; data: BlogPostData; slug: string }[]

  const sorted = allBlogPosts.sort(
    (a: { data: BlogPostData }, b: { data: BlogPostData }) => {
      const dateA = new Date(a.data.published)
      const dateB = new Date(b.data.published)
      return dateA > dateB ? -1 : 1
    },
  )

  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug
    sorted[i].data.nextTitle = sorted[i - 1].data.title
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug
    sorted[i].data.prevTitle = sorted[i + 1].data.title
  }

  return sorted
}

export type Tag = {
  name: string
  count: number
}

export async function getTagList(): Promise<Tag[]> {
  const allBlogPosts = await getCollection<'posts'>('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })

  const countMap: { [key: string]: number } = {}
  allBlogPosts.map((post: { data: { tags: string[] } }) => {
    post.data.tags.map((tag: string) => {
      if (!countMap[tag]) countMap[tag] = 0
      countMap[tag]++
    })
  })

  // sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  return keys.map(key => ({ name: key, count: countMap[key] }))
}

export type Category = {
  name: string
  count: number
}

export async function getCategoryList(): Promise<Category[]> {
  const allBlogPosts = await getCollection<'posts'>('posts', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })
  const count: { [key: string]: number } = {}
  allBlogPosts.map((post: { data: { category: string | number } }) => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized)
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1
      return
    }
    count[post.data.category] = count[post.data.category]
      ? count[post.data.category] + 1
      : 1
  })

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  const ret: Category[] = []
  for (const c of lst) {
    ret.push({ name: c, count: count[c] })
  }
  return ret
}

export type BlogPubData = {
  title: string
  published: string
  tags: string[]
  category?: string
  draft?: boolean
  nextSlug?: string
  nextTitle?: string
  prevSlug?: string
  prevTitle?: string
}

export async function getSortedPostsPublications(): Promise<
  { body: string; data: BlogPubData; slug: string }[]
> {
  const allBlogPosts = (await getCollection('publications', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })) as unknown as { body: string; data: BlogPubData; slug: string }[]

  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published)
    const dateB = new Date(b.data.published)
    return dateA > dateB ? -1 : 1
  })

  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug
    sorted[i].data.nextTitle = sorted[i - 1].data.title
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug
    sorted[i].data.prevTitle = sorted[i + 1].data.title
  }

  return sorted
}

export type Tag_Pub = {
  name: string
  count: number
}

export async function getTagListPub(): Promise<Tag_Pub[]> {
  const allPubPosts = await getCollection<'publications'>(
    'publications',
    ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true
    },
  )

  const countMap: { [key: string]: number } = {}
  for (const post of allPubPosts) {
    for (const tag of post.data.tags) {
      if (!countMap[tag]) countMap[tag] = 0
      countMap[tag]++
    }
  }

  // Sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  return keys.map(key => ({ name: key, count: countMap[key] }))
}

export type Category_Pub = {
  name: string
  count: number
}

export async function getCategoryListPublications(): Promise<Category_Pub[]> {
  const allBlogPosts = await getCollection<'publications'>(
    'publications',
    ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true
    },
  )

  const count: { [key: string]: number } = {}
  for (const post of allBlogPosts) {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized)
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1
      continue
    }
    count[post.data.category] = count[post.data.category]
      ? count[post.data.category] + 1
      : 1
  }

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  const ret: Category_Pub[] = []
  for (const c of lst) {
    ret.push({ name: c, count: count[c] })
  }
  return ret
}

export type BlogProjData = {
  title: string
  published: string
  tags: string[]
  category?: string
  draft?: boolean
  nextSlug?: string
  nextTitle?: string
  prevSlug?: string
  prevTitle?: string
}

export async function getSortedPostsProjects(): Promise<
  { body: string; data: BlogProjData; slug: string }[]
> {
  const allProjectPosts = (await getCollection('projects', ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true
  })) as unknown as { body: string; data: BlogProjData; slug: string }[]

  const sorted = allProjectPosts.sort((a, b) => {
    const dateA = new Date(a.data.published)
    const dateB = new Date(b.data.published)
    return dateA > dateB ? -1 : 1
  })

  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug
    sorted[i].data.nextTitle = sorted[i - 1].data.title
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug
    sorted[i].data.prevTitle = sorted[i + 1].data.title
  }

  return sorted
}

export type Tag_Proj = {
  name: string
  count: number
}

export async function getTagListProjects(): Promise<Tag_Proj[]> {
  const allPubPosts = await getCollection<'projects'>(
    'projects',
    ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true
    },
  )

  const countMap: { [key: string]: number } = {}
  for (const post of allPubPosts) {
    for (const tag of post.data.tags) {
      if (!countMap[tag]) countMap[tag] = 0
      countMap[tag]++
    }
  }

  // Sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  return keys.map(key => ({ name: key, count: countMap[key] }))
}

export type Category_Proj = {
  name: string
  count: number
}

export async function getCategoryListProjects(): Promise<Category_Proj[]> {
  const allBlogPosts = await getCollection<'projects'>(
    'projects',
    ({ data }) => {
      return import.meta.env.PROD ? data.draft !== true : true
    },
  )

  const count: { [key: string]: number } = {}
  for (const post of allBlogPosts) {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized)
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1
      continue
    }
    count[post.data.category] = count[post.data.category]
      ? count[post.data.category] + 1
      : 1
  }

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  const ret: Category_Pub[] = []
  for (const c of lst) {
    ret.push({ name: c, count: count[c] })
  }
  return ret
}
