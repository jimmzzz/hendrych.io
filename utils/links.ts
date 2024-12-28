
export interface NavigationLink {
    id: string;
    label: string;
    path: string;
    hash?: string;
    icon?: string;
}

export interface IconLink extends NavigationLink {
    icon: string;
    alt?: string;
}

// CONTACT
export const EMAIL_ADDRESS = 'info@hendrych.io'
export const PHONE_NUMBER = '+420 607 737 765'
export const PHYSICAL_ADDRESS = 'Prague, Czech republic'

/// SOCIALS
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tomas-hendrych-cz/'
export const INSTAGRAM_URL = 'https://www.instagram.com/frontendBlond'
export const GITHUB_URL = 'https://github.com/jimmzzz'
export const X_URL = 'https://x.com/frontendBlond'

export const navigationLinks: NavigationLink[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/', hash: '#services' },
    { id: 'aboutMe', label: 'About me', path: '/', hash: '#about-me' },
    { id: 'contact', label: 'Contact', path: '/', hash: '#contact' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    // { id: 'projects', label: 'Projects', path: '/', hash: '#projects' },
]

export const navigationLinksBlog: NavigationLink[] = [
    { id: 'blog', label: 'All articles', path: '/blog' },
    // { id: 'collections', label: 'Collections', path: '/blog/collections' },
    // todo: social icons only
]

export const socialLinks: IconLink[] = [
    { id: 'linkedIn', icon: 'LinkedIn', label: 'LinkedIn', path: LINKEDIN_URL},
    { id: 'instagram', icon: 'Instagram', label: 'Instagram', path: INSTAGRAM_URL},
    { id: 'github', icon: 'Github', label: 'Github', path: GITHUB_URL },
    { id: 'x', icon: 'pajamas:twitter', label: 'X (Twitter)', path: X_URL },
]


