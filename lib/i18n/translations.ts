export type Locale = 'vi' | 'en' | 'ja';

export const locales: { code: Locale; label: string; flag: string }[] = [
    { code: 'vi', label: 'VI', flag: '🇻🇳' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ja', label: 'JA', flag: '🇯🇵' },
];

export type Dictionary = {
    nav: {
        about: string;
        experience: string;
        skills: string;
        projects: string;
        contact: string;
        hireMe: string;
    };
    hero: {
        greeting: string;
        openBadge: string;
        titles: string[];
        chips: { java: string; jp: string; ai: string };
        description: string;
        ctaProjects: string;
        ctaCV: string;
        ctaContact: string;
        scroll: string;
    };
    sections: {
        about: { num: string; title: string };
        experience: { num: string; title: string };
        journey: { num: string; title: string };
        skills: { num: string; title: string };
        projects: { num: string; title: string };
        contact: { num: string; title: string };
    };
    about: {
        p1Pre: string;
        p1Role: string;
        p1Mid: string;
        p1Location: string;
        p1Mid2: string;
        p1School: string;
        p2: string;
        p3Pre: string;
        p3Academy: string;
        p3Mid: string;
        p3N3: string;
        p3End: string;
        p4: string;
        learning: string;
    };
    stats: { projects: string; years: string; tech: string; coffee: string };
    experience: {
        workBadge: string;
        eduBadge: string;
        objectiveBadge: string;
        objective: string;
        objectiveHighlight1: string;
        objectiveHighlight2: string;
        fptJapan: {
            company: string;
            role: string;
            period: string;
            points: string[];
        };
        education: {
            school: string;
            degree: string;
            period: string;
            points: string[];
        };
    };
    journey: {
        items: { date: string; title: string; description: string }[];
    };
    projects: {
        viewAll: string;
        ongoing: string;
        repository: string;
        organization: string;
        items: {
            quizmate: { description: string; features: string[] };
            fanshop: { description: string; features: string[] };
            koi: { description: string; features: string[] };
            melon: { description: string; features: string[] };
        };
    };
    contact: {
        headingPre: string;
        headingAccent: string;
        descPre: string;
        descBold: string;
        descPost: string;
    };
    footer: {
        builtWith: string;
        designed: string;
    };
};

export const translations: Record<Locale, Dictionary> = {
    vi: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            hireMe: 'Hire me',
        },
        hero: {
            greeting: 'Xin chào, tôi là',
            openBadge: 'Open to opportunities',
            titles: [
                'Bridge Software Engineer',
                'Backend Developer',
                'Java & Spring Boot Specialist',
                'AI Integration Engineer',
            ],
            chips: { java: 'Java · Spring Boot', jp: '🇯🇵 Japanese N3', ai: 'AI / LLM Integration' },
            description:
                'Bridge Software Engineer chuyên Java & Spring Boot. Xây dựng các hệ thống backend mở rộng được, hiệu năng cao và tích hợp AI/LLM. Hướng tới vị trí Tech Lead — dẫn dắt các hệ thống phân tán quy mô lớn.',
            ctaProjects: 'Xem dự án',
            ctaCV: 'Tải CV',
            ctaContact: 'Liên hệ',
            scroll: 'scroll',
        },
        sections: {
            about: { num: '01', title: 'About me' },
            experience: { num: '02', title: 'Experience & Education' },
            journey: { num: '03', title: 'My Journey' },
            skills: { num: '04', title: 'Tech Stack' },
            projects: { num: '05', title: 'Featured Projects' },
            contact: { num: '06', title: 'Get in touch' },
        },
        about: {
            p1Pre: 'Tôi là ',
            p1Role: 'Bridge Software Engineer',
            p1Mid: ' đến từ ',
            p1Location: 'Quận 9, TP. Hồ Chí Minh',
            p1Mid2: ', hiện đang theo học Software Engineering tại ',
            p1School: 'FPT University',
            p2: 'Tôi tập trung vào Java & Spring Boot — xây dựng backend cho các nền tảng e-commerce, logistics và AI. Gần đây tôi đào sâu vào LLM integration (GPT/LLaMA/Mistral), OCR & NLP qua dự án Quizmate AI.',
            p3Pre: 'Tôi đã hoàn thành chương trình tại ',
            p3Academy: 'FPT Japan Academy',
            p3Mid: ' và đạt ',
            p3N3: 'Japanese N3',
            p3End: ' — sẵn sàng cho vai trò Bridge Engineer giữa Việt Nam và Nhật Bản.',
            p4: 'Tôi tin rằng code tốt không chỉ chạy được — nó phải dễ đọc, dễ mở rộng và sẵn sàng cho production.',
            learning: 'Hiện tại đang học',
        },
        stats: {
            projects: 'Dự án production',
            years: 'Năm code Java',
            tech: 'Công nghệ',
            coffee: 'Tách cà phê',
        },
        experience: {
            workBadge: 'Work Experience',
            eduBadge: 'Education',
            objectiveBadge: 'Career Objective',
            objective: 'Mục tiêu ngắn hạn: phát triển ',
            objectiveHighlight1: 'backend skills',
            objectiveHighlight2: 'Tech Lead',
            fptJapan: {
                company: 'FPT Japan Academy',
                role: 'Japanese Intern',
                period: '01/2025 — 04/2025',
                points: [
                    'Nâng cao kỹ năng tiếng Nhật chuyên ngành IT',
                    'Tìm hiểu văn hóa làm việc Nhật Bản — chuẩn bị cho vai trò Bridge Engineer',
                    'Đạt Japanese N3',
                ],
            },
            education: {
                school: 'FPT University',
                degree: 'Software Engineering',
                period: '09/2021 — Hiện tại',
                points: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)'],
            },
        },
        journey: {
            items: [
                {
                    date: '09/2021',
                    title: 'Bắt đầu FPT University',
                    description: 'Khởi đầu hành trình Software Engineering tại FPT University — tập trung DSA & OOP.',
                },
                {
                    date: '09/2024',
                    title: 'Backend Developer — Koi Express',
                    description: 'Xây dựng dynamic pricing engine, tích hợp AWS S3 & WebSocket cho logistics platform.',
                },
                {
                    date: '01/2025',
                    title: 'Intern tại FPT Japan Academy',
                    description: 'Học tiếng Nhật chuyên ngành IT, đạt N3, làm quen văn hóa làm việc Nhật Bản.',
                },
                {
                    date: '09/2025',
                    title: 'Backend Developer — Fan Shop',
                    description: 'Tích hợp Firebase + Google Cloud, xây real-time chat Admin↔User cho e-commerce.',
                },
                {
                    date: '01/2026',
                    title: 'Đang xây dựng Quizmate AI',
                    description: 'Hệ thống AI generate quiz từ multi-modal materials (PDF, image, audio, video).',
                },
            ],
        },
        projects: {
            viewAll: 'Xem tất cả dự án trên GitHub',
            ongoing: 'Đang phát triển',
            repository: 'Repository',
            organization: 'Organization',
            items: {
                quizmate: {
                    description:
                        'Hệ thống AI tự động generate quiz từ đa dạng học liệu (PDF, hình ảnh, audio, video, URL) sử dụng NLP, OCR và các LLM (GPT/LLaMA/Mistral). Tích hợp voice interaction (TTS/STT) cho trải nghiệm học tập tương tác.',
                    features: [
                        'AI Quiz Generation từ PDFs, images, audio, video, URLs',
                        'Multi-LLM integration: GPT, LLaMA, Mistral',
                        'TTS/STT cho real-time voice interaction',
                        'High-performance RESTful APIs cho Web & Mobile',
                    ],
                },
                fanshop: {
                    description:
                        'Nền tảng thương mại điện tử với tích hợp Firebase & Google Cloud cho Google Sign-In bảo mật. Real-time chat giữa Admin và User cải thiện đáng kể tốc độ phản hồi hỗ trợ khách hàng.',
                    features: [
                        'Authentication an toàn với Firebase + Google Cloud',
                        'Real-time Chat System (Admin ↔ User)',
                        'Complex Order Status Logic & sync Web-Mobile real-time',
                        'Quản lý đa vai trò: Admin · Seller · Customer',
                    ],
                },
                koi: {
                    description:
                        'Nền tảng logistics với dynamic pricing engine tự động tính cước dựa trên cân nặng & quãng đường. Tích hợp AWS S3, OTP qua Twilio và WebSocket STOMP cho real-time tracking.',
                    features: [
                        'Dynamic Pricing Engine tối ưu doanh thu',
                        'AWS S3 cho scalable media storage',
                        'Multi-factor Authentication (OTP via Twilio)',
                        'Spring Security + JWT architecture',
                        'Real-time Chat qua WebSocket (STOMP)',
                    ],
                },
                melon: {
                    description:
                        'Ứng dụng chat real-time với hỗ trợ chat 1-1, group chat, gửi media và trạng thái online. Backend Spring Boot kết hợp WebSocket cho độ trễ thấp.',
                    features: [
                        'WebSocket với STOMP protocol',
                        'Presence & typing indicators',
                        'Media sharing & message persistence',
                    ],
                },
            },
        },
        contact: {
            headingPre: 'Hãy cùng xây dựng điều gì đó ',
            headingAccent: 'tuyệt vời.',
            descPre: 'Tôi đang tìm kiếm cơ hội ',
            descBold: 'internship / fresher Backend',
            descPost:
                ' và sẵn sàng cho các dự án freelance Java/Spring Boot. Hộp thư của tôi luôn rộng mở — đừng ngại nói lời chào.',
        },
        footer: {
            builtWith: 'Built with',
            designed: 'Designed & developed by NTT',
        },
    },

    en: {
        nav: {
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            hireMe: 'Hire me',
        },
        hero: {
            greeting: "Hi there, I'm",
            openBadge: 'Open to opportunities',
            titles: [
                'Bridge Software Engineer',
                'Backend Developer',
                'Java & Spring Boot Specialist',
                'AI Integration Engineer',
            ],
            chips: { java: 'Java · Spring Boot', jp: '🇯🇵 Japanese N3', ai: 'AI / LLM Integration' },
            description:
                'Bridge Software Engineer specialized in Java & Spring Boot. I build scalable, high-performance backend systems with AI/LLM integration. Aiming for Tech Lead — leading large-scale distributed systems.',
            ctaProjects: 'View projects',
            ctaCV: 'Download CV',
            ctaContact: 'Contact',
            scroll: 'scroll',
        },
        sections: {
            about: { num: '01', title: 'About me' },
            experience: { num: '02', title: 'Experience & Education' },
            journey: { num: '03', title: 'My Journey' },
            skills: { num: '04', title: 'Tech Stack' },
            projects: { num: '05', title: 'Featured Projects' },
            contact: { num: '06', title: 'Get in touch' },
        },
        about: {
            p1Pre: "I'm a ",
            p1Role: 'Bridge Software Engineer',
            p1Mid: ' from ',
            p1Location: 'District 9, Ho Chi Minh City',
            p1Mid2: ', currently studying Software Engineering at ',
            p1School: 'FPT University',
            p2: 'I focus on Java & Spring Boot — building backends for e-commerce, logistics, and AI platforms. Recently diving deep into LLM integration (GPT/LLaMA/Mistral), OCR & NLP through the Quizmate AI project.',
            p3Pre: 'I completed the program at ',
            p3Academy: 'FPT Japan Academy',
            p3Mid: ' and earned ',
            p3N3: 'Japanese N3',
            p3End: ' — ready for a Bridge Engineer role between Vietnam and Japan.',
            p4: "Good code doesn't just run — it should be readable, scalable, and production-ready.",
            learning: 'Currently learning',
        },
        stats: {
            projects: 'Production projects',
            years: 'Years of Java',
            tech: 'Technologies',
            coffee: 'Cups of coffee',
        },
        experience: {
            workBadge: 'Work Experience',
            eduBadge: 'Education',
            objectiveBadge: 'Career Objective',
            objective: 'Short-term goal: develop strong ',
            objectiveHighlight1: 'backend skills',
            objectiveHighlight2: 'Tech Lead',
            fptJapan: {
                company: 'FPT Japan Academy',
                role: 'Japanese Intern',
                period: '01/2025 — 04/2025',
                points: [
                    'Improved Japanese language skills (IT specialty)',
                    'Learned Japanese work culture — preparing for Bridge Engineer role',
                    'Achieved Japanese N3',
                ],
            },
            education: {
                school: 'FPT University',
                degree: 'Software Engineering',
                period: '09/2021 — Present',
                points: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)'],
            },
        },
        journey: {
            items: [
                {
                    date: '09/2021',
                    title: 'Started at FPT University',
                    description: 'Began my Software Engineering journey at FPT University — focusing on DSA & OOP.',
                },
                {
                    date: '09/2024',
                    title: 'Backend Developer — Koi Express',
                    description: 'Built dynamic pricing engine, integrated AWS S3 & WebSocket for the logistics platform.',
                },
                {
                    date: '01/2025',
                    title: 'Intern at FPT Japan Academy',
                    description: 'Studied Japanese for IT, achieved N3, learned Japanese work culture.',
                },
                {
                    date: '09/2025',
                    title: 'Backend Developer — Fan Shop',
                    description: 'Integrated Firebase + Google Cloud, built real-time Admin↔User chat for e-commerce.',
                },
                {
                    date: '01/2026',
                    title: 'Building Quizmate AI',
                    description: 'AI system that generates quizzes from multi-modal materials (PDF, image, audio, video).',
                },
            ],
        },
        projects: {
            viewAll: 'View all projects on GitHub',
            ongoing: 'In development',
            repository: 'Repository',
            organization: 'Organization',
            items: {
                quizmate: {
                    description:
                        'AI-powered system that automatically generates quizzes from multimodal learning materials (PDF, images, audio, video, URLs) using NLP, OCR, and LLMs (GPT/LLaMA/Mistral). Integrated voice interaction (TTS/STT) for an interactive learning experience.',
                    features: [
                        'AI Quiz Generation from PDFs, images, audio, video, URLs',
                        'Multi-LLM integration: GPT, LLaMA, Mistral',
                        'TTS/STT for real-time voice interaction',
                        'High-performance RESTful APIs for Web & Mobile',
                    ],
                },
                fanshop: {
                    description:
                        'E-commerce platform with Firebase & Google Cloud integration for secure Google Sign-In. Real-time chat between Admin and User dramatically improved customer support responsiveness.',
                    features: [
                        'Secure authentication with Firebase + Google Cloud',
                        'Real-time Chat System (Admin ↔ User)',
                        'Complex Order Status Logic & real-time Web-Mobile sync',
                        'Multi-role management: Admin · Seller · Customer',
                    ],
                },
                koi: {
                    description:
                        'Logistics platform with a dynamic pricing engine that auto-calculates shipping based on weight & distance. Integrated AWS S3, OTP via Twilio, and WebSocket STOMP for real-time tracking.',
                    features: [
                        'Dynamic Pricing Engine for revenue optimization',
                        'AWS S3 for scalable media storage',
                        'Multi-factor Authentication (OTP via Twilio)',
                        'Spring Security + JWT architecture',
                        'Real-time chat via WebSocket (STOMP)',
                    ],
                },
                melon: {
                    description:
                        'Real-time chat app supporting 1-1 chat, group chat, media sharing, and online presence. Spring Boot backend with WebSocket for low latency.',
                    features: [
                        'WebSocket with STOMP protocol',
                        'Presence & typing indicators',
                        'Media sharing & message persistence',
                    ],
                },
            },
        },
        contact: {
            headingPre: "Let's build something ",
            headingAccent: 'great.',
            descPre: "I'm looking for ",
            descBold: 'Backend internship / fresher',
            descPost:
                ' opportunities and open to Java/Spring Boot freelance projects. My inbox is always open — say hi anytime.',
        },
        footer: {
            builtWith: 'Built with',
            designed: 'Designed & developed by NTT',
        },
    },

    ja: {
        nav: {
            about: '自己紹介',
            experience: '経歴',
            skills: 'スキル',
            projects: 'プロジェクト',
            contact: '連絡',
            hireMe: '採用',
        },
        hero: {
            greeting: 'はじめまして、',
            openBadge: '求職中',
            titles: [
                'ブリッジSE',
                'バックエンド開発者',
                'Java & Spring Boot スペシャリスト',
                'AI統合エンジニア',
            ],
            chips: { java: 'Java · Spring Boot', jp: '🇯🇵 日本語 N3', ai: 'AI / LLM 統合' },
            description:
                'Java と Spring Boot を専門とするブリッジSEです。スケーラブルで高性能なバックエンドシステムと AI/LLM の統合を行います。将来は大規模分散システムを率いるテックリードを目指しています。',
            ctaProjects: 'プロジェクトを見る',
            ctaCV: '履歴書ダウンロード',
            ctaContact: 'お問い合わせ',
            scroll: 'スクロール',
        },
        sections: {
            about: { num: '01', title: '自己紹介' },
            experience: { num: '02', title: '経歴・学歴' },
            journey: { num: '03', title: '歩み' },
            skills: { num: '04', title: '技術スタック' },
            projects: { num: '05', title: '主なプロジェクト' },
            contact: { num: '06', title: 'お問い合わせ' },
        },
        about: {
            p1Pre: '私は',
            p1Role: 'ブリッジSE',
            p1Mid: 'で、',
            p1Location: 'ホーチミン市9区',
            p1Mid2: '在住、現在',
            p1School: 'FPT大学',
            p2: 'Java と Spring Boot を中心に、EC・物流・AI 分野のバックエンドを構築しています。最近は Quizmate AI プロジェクトを通して LLM 統合(GPT/LLaMA/Mistral)、OCR、NLP に注力しています。',
            p3Pre: '',
            p3Academy: 'FPT Japan Academy',
            p3Mid: 'を修了し、',
            p3N3: '日本語能力試験 N3',
            p3End: 'を取得しました — ベトナムと日本を繋ぐブリッジエンジニアとして活躍する準備ができています。',
            p4: '良いコードとは、ただ動くだけでなく、読みやすく、拡張しやすく、本番運用に耐えるものだと信じています。',
            learning: '学習中',
        },
        stats: {
            projects: '本番プロジェクト',
            years: 'Java 経験年数',
            tech: '技術',
            coffee: 'コーヒー',
        },
        experience: {
            workBadge: '職務経歴',
            eduBadge: '学歴',
            objectiveBadge: 'キャリア目標',
            objective: '短期目標:強い',
            objectiveHighlight1: 'バックエンド力',
            objectiveHighlight2: 'テックリード',
            fptJapan: {
                company: 'FPT Japan Academy',
                role: '日本語インターン',
                period: '2025/01 — 2025/04',
                points: [
                    'IT専門の日本語スキル向上',
                    '日本の働き方を学習 — ブリッジSE役への準備',
                    '日本語能力試験 N3 取得',
                ],
            },
            education: {
                school: 'FPT大学',
                degree: 'ソフトウェア工学',
                period: '2021/09 — 在学中',
                points: ['データ構造とアルゴリズム', 'オブジェクト指向プログラミング (OOP)'],
            },
        },
        journey: {
            items: [
                {
                    date: '2021/09',
                    title: 'FPT大学 入学',
                    description: 'FPT大学でソフトウェア工学の旅を開始 — DSA と OOP に注力。',
                },
                {
                    date: '2024/09',
                    title: 'バックエンド開発 — Koi Express',
                    description: '物流プラットフォームの動的価格エンジンと AWS S3・WebSocket 統合を担当。',
                },
                {
                    date: '2025/01',
                    title: 'FPT Japan Academy インターン',
                    description: 'IT専門日本語、N3 取得、日本の働き方を学習。',
                },
                {
                    date: '2025/09',
                    title: 'バックエンド開発 — Fan Shop',
                    description: 'Firebase + Google Cloud 統合、EC向けリアルタイム管理者↔ユーザーチャット構築。',
                },
                {
                    date: '2026/01',
                    title: 'Quizmate AI 開発中',
                    description: '多様な学習素材(PDF・画像・音声・動画)からクイズを自動生成するAIシステム。',
                },
            ],
        },
        projects: {
            viewAll: 'GitHub で全プロジェクトを見る',
            ongoing: '開発中',
            repository: 'リポジトリ',
            organization: '組織',
            items: {
                quizmate: {
                    description:
                        '多様な学習素材(PDF、画像、音声、動画、URL)から NLP、OCR、LLM (GPT/LLaMA/Mistral) を用いてクイズを自動生成する AI システム。音声インタラクション(TTS/STT)も統合し、双方向の学習体験を実現。',
                    features: [
                        'PDF・画像・音声・動画・URL から AI クイズ生成',
                        '複数 LLM 統合: GPT、LLaMA、Mistral',
                        'リアルタイム音声対話のための TTS/STT',
                        'Web・モバイル向け高性能 RESTful API',
                    ],
                },
                fanshop: {
                    description:
                        'Firebase & Google Cloud を統合した安全な Google サインインを備えた EC プラットフォーム。管理者とユーザー間のリアルタイムチャットで顧客サポートの応答速度を大幅に向上。',
                    features: [
                        'Firebase + Google Cloud による安全な認証',
                        'リアルタイムチャットシステム (管理者 ↔ ユーザー)',
                        '複雑な注文ステータスロジックと Web・モバイルのリアルタイム同期',
                        '複数役割管理: 管理者 · 販売者 · 顧客',
                    ],
                },
                koi: {
                    description:
                        '重量と距離に基づき送料を自動計算する動的価格エンジンを備えた物流プラットフォーム。AWS S3、Twilio による OTP、WebSocket STOMP によるリアルタイム追跡を統合。',
                    features: [
                        '収益最適化のための動的価格エンジン',
                        'スケーラブルメディアストレージ用 AWS S3',
                        '多要素認証 (Twilio 経由 OTP)',
                        'Spring Security + JWT アーキテクチャ',
                        'WebSocket (STOMP) によるリアルタイムチャット',
                    ],
                },
                melon: {
                    description:
                        '1対1チャット、グループチャット、メディア共有、オンラインステータスをサポートするリアルタイムチャットアプリ。Spring Boot バックエンドと低遅延の WebSocket を組み合わせ。',
                    features: [
                        'STOMP プロトコルによる WebSocket',
                        'プレゼンス & タイピングインジケーター',
                        'メディア共有 & メッセージ永続化',
                    ],
                },
            },
        },
        contact: {
            headingPre: '一緒に素晴らしいものを',
            headingAccent: '作りましょう。',
            descPre: '現在、',
            descBold: 'バックエンドのインターン / 新卒',
            descPost:
                ' のポジションを探しており、Java/Spring Boot のフリーランスプロジェクトも歓迎します。お気軽にご連絡ください。',
        },
        footer: {
            builtWith: '作成',
            designed: 'NTT による設計と開発',
        },
    },
};
