import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { getPostData } from '@/lib/blog';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function Post({ params }: { params: { slug: string } }) {
    const postData = await getPostData(params.slug);

    return (
        <>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen pt-32 pb-20">
                <div className="container-x max-w-3xl">
                    <div className="mb-10">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-text-dim hover:text-accent transition-colors font-mono text-sm mb-6">
                            <ArrowLeft size={16} />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-text leading-tight">
                            {postData.title}
                        </h1>
                        <div className="text-text-muted font-mono">
                            {postData.date}
                        </div>
                    </div>
                    
                    <article 
                        className="prose prose-invert prose-accent max-w-none"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
