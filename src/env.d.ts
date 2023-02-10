/// <reference types="astro/client" />

type Nullable<T> = T | null

interface defaultProps {
    class?: string
    style?: string
    children?: any
}

interface PostFrontmatter {
    title: string
    date: string
    description: string
}