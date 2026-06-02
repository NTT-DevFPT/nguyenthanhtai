import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen pt-32 pb-20">
                <div className="container-x">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-text">
                        Blog
                    </h1>
                    
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {allPostsData.map(({ id, date, title, excerpt }) => (
                            <Link href={`/blog/${id}`} key={id} className="group block h-full">
                                <div className="h-full glass rounded-xl p-6 border border-border hover:border-accent/50 transition-all">
                                    <h2 className="text-xl font-bold mb-2 text-text group-hover:text-accent transition-colors">
                                        {title}
                                    </h2>
                                    <small className="text-text-muted font-mono mb-4 block">
                                        {date}
                                    </small>
                                    <p className="text-text-dim">
                                        {excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {allPostsData.length === 0 && (
                        <p className="text-text-dim">Chưa có bài viết nào.</p>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
