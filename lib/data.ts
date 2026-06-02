export const personalInfo = {
    name: 'Nguyễn Thành Tài',
    nameParts: ['Nguyễn', 'Thành', 'Tài.'],
    email: 'thanhtai10903@gmail.com',
    phone: '0981667547',
    dob: '10/09/2003',
    github: 'https://github.com/NTT-DevFPT',
    orgGithub: 'https://github.com/QuizmateAI',
    cv: '/Nguyen_Thanh_Tai-CV.pdf',
    avatar: '/avatar.png',
};

export const statKeys = ['projects', 'years', 'tech', 'coffee'] as const;
export const statValues = [
    { value: 4, suffix: '+' },
    { value: 3, suffix: '+' },
    { value: 18, suffix: '+' },
    { value: '∞', suffix: '' },
];

export type SkillIcon = 'backend' | 'database' | 'frontend' | 'devops' | 'ai';
export type SkillGroup = {
    title: string;
    icon: SkillIcon;
    skills: { name: string; learning?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: 'Backend',
        icon: 'backend',
        skills: [
            { name: 'Java 17' },
            { name: 'Spring Boot 3.x' },
            { name: 'Spring Security' },
            { name: 'JWT / OAuth2' },
            { name: 'Hibernate / JPA' },
            { name: 'REST API' },
            { name: 'WebSocket / STOMP' },
            { name: 'Node.js' },
        ],
    },
    {
        title: 'AI & Data Processing',
        icon: 'ai',
        skills: [
            { name: 'LLM Integration' },
            { name: 'GPT / LLaMA / Mistral' },
            { name: 'OCR' },
            { name: 'NLP' },
            { name: 'TTS / STT' },
        ],
    },
    {
        title: 'Database',
        icon: 'database',
        skills: [
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'SQL Server' },
            { name: 'Redis' },
            { name: 'Firebase' },
        ],
    },
    {
        title: 'Frontend & Mobile',
        icon: 'frontend',
        skills: [
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'Next.js' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        title: 'DevOps & Cloud',
        icon: 'devops',
        skills: [
            { name: 'AWS (EC2, S3, RDS)' },
            { name: 'Google Cloud' },
            { name: 'Docker' },
            { name: 'Git' },
            { name: 'IntelliJ IDEA' },
            { name: 'Jira' },
            { name: 'Kubernetes', learning: true },
            { name: 'Spring Cloud', learning: true },
        ],
    },
];

export type ProjectId = 'quizmate' | 'fanshop' | 'koi' | 'melon';
export type ProjectMeta = {
    id: ProjectId;
    num: string;
    title: string;
    tag: string;
    stack: string[];
    shape: 'sphere' | 'torus' | 'octahedron' | 'box';
    color: string;
    period: string;
    status?: 'current' | 'completed';
    links?: { labelKey: 'repository' | 'organization'; href: string }[];
};

export const projects: ProjectMeta[] = [
    {
        id: 'quizmate',
        num: '01',
        title: 'Quizmate AI',
        tag: 'AI · LLM · Education',
        stack: ['Spring Boot', 'PostgreSQL', 'OpenAI API', 'OCR', 'NLP', 'WebSocket'],
        shape: 'sphere',
        color: '#a78bfa',
        period: '01/2026 — ',
        status: 'current',
        links: [{ labelKey: 'organization', href: 'https://github.com/QuizmateAI' }],
    },
    {
        id: 'fanshop',
        num: '02',
        title: 'Fan Shop',
        tag: 'E-commerce · Full-stack',
        stack: ['Spring Boot 3.x', 'Firebase', 'Google Cloud', 'React', 'TypeScript', 'Kotlin'],
        shape: 'octahedron',
        color: '#5eead4',
        period: '09/2025 — 01/2026',
        status: 'completed',
        links: [{ labelKey: 'repository', href: 'https://github.com/JustOnlyFan/OnlyFanShop_WEB' }],
    },
    {
        id: 'koi',
        num: '03',
        title: 'Koi Express',
        tag: 'Logistics · Real-time',
        stack: ['Spring Boot 2.7', 'PostgreSQL', 'AWS S3', 'Twilio', 'WebSocket', 'Docker'],
        shape: 'torus',
        color: '#22d3ee',
        period: '09/2024 — 12/2024',
        status: 'completed',
        links: [{ labelKey: 'repository', href: 'https://github.com/not-for-tomorrow/Koi-Express' }],
    },
    {
        id: 'melon',
        num: '04',
        title: 'Melon Chat',
        tag: 'Realtime · Chat App',
        stack: ['Spring Boot', 'WebSocket', 'MongoDB', 'React'],
        shape: 'box',
        color: '#fbbf24',
        period: '2025',
        status: 'completed',
        links: [{ labelKey: 'repository', href: 'https://github.com/NTT-DevFPT/melon_chat' }],
    },
];

export const navLinkHrefs = [
    { href: '/#about', key: 'about' as const },
    { href: '/#experience', key: 'experience' as const },
    { href: '/#skills', key: 'skills' as const },
    { href: '/#projects', key: 'projects' as const },
    { href: '/blog', key: 'blog' as const },
    { href: '/#contact', key: 'contact' as const },
];

export const certificates = [
    {
        title: 'Java Testing',
        file: '/certificates/java_testing.pdf',
    },
    {
        title: 'Object-Oriented Programming in Java',
        file: '/certificates/oop_in_java.pdf',
    },
    {
        title: 'Project Management',
        file: '/certificates/project_management.pdf',
    },
    {
        title: 'Software Development Lifecycle',
        file: '/certificates/sw_dev_lifecyvle.pdf',
    },
];
