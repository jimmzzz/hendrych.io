export const VALID_TAGS = [
    'html',
    'javascript',
    'css',
    // 'vue',
    'algorithms'
] as const

export type BlogTag = typeof VALID_TAGS[number]
