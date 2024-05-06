
export interface NavigationLink {
    id: string;
    label: string;
    path: string;
    hash?: string;
}

export interface IconLink extends NavigationLink {
    icon: string;
    alt?: string;
}

export const myEmailAdress = "info@hendrych.io"

export const navigationLinks: NavigationLink[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'services', label: 'Services', path: '/', hash: '#services' },
    { id: 'aboutMe', label: 'About me', path: '/', hash: '#about-me' },
    { id: 'contact', label: 'Contact', path: '/', hash: '#contact' },
    { id: 'projects', label: 'Projects', path: '/', hash: '#projects' },
    { id: 'blog', label: 'Blog', path: '/blog' },
]

export const socialLinks: IconLink[] = [
    { id: 'linkedIn', icon: 'LinkedIn', label: 'LinkedIn', path: 'https://cz.linkedin.com/in/tomáš-hendrych-cz'},
    { id: 'instagram', icon: 'Instagram', label: 'Instagram', path: 'https://instagram.com/frontendBlond'},
    { id: 'github', icon: 'Github', label: 'Github', path: 'https://github.com/jimmzzz' },
]


