export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface UserInfo {
    name: string;
    avatar: string;
    email: string;
    phone: string;
    birthday: string;
    location: string;
    socialLinks: SocialLink[];
}

export interface Resume {
    userInfo: UserInfo;
    skills: string[];
    education: Education[];
    experiences: Experience[];
    projects: Project[];
    portfolio: Portfolio[];
    footer: Footer;
}

export interface Education {
    school: string;
    degree: string;
    major: string;
    startDate: string;
    endDate: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
}

export interface Project {
    name: string;
    description: string;
    details: string[];
}

export interface Portfolio {
    title: string;
    description: string;
    link: string;
}

export interface Footer {
    copyright: string;
    icp: string;
    customText: string;
}