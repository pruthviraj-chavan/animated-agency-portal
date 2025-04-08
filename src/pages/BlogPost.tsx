
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogPosts, BlogPost as BlogPostType } from '@/lib/blog-data';
import { BlogCard } from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft, Share2, Tag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Helmet } from 'react-helmet';
import Markdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  
  useEffect(() => {
    const currentPost = blogPosts.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts
      if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
        const related = blogPosts.filter(p => currentPost.relatedPosts?.includes(p.id));
        setRelatedPosts(related);
      } else {
        // If no related posts specified, get posts with common tags
        const postsWithCommonTags = blogPosts
          .filter(p => p.id !== currentPost.id && p.tags.some(tag => currentPost.tags.includes(tag)))
          .slice(0, 3);
        setRelatedPosts(postsWithCommonTags);
      }
    } else {
      // Post not found, redirect to blog
      navigate('/blog');
    }
  }, [slug, navigate]);
  
  if (!post) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{post.title} - Dievektor Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.slug}`} />
        
        {/* Open Graph meta tags for better social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:url" content={`https://yourdomain.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.coverImage} />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-12 bg-muted/30">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button variant="ghost" size="sm" asChild className="mb-4">
                  <Link to="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
                  </Link>
                </Button>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Link to={`/blog?tag=${tag}`} key={tag}>
                      <Badge variant="outline" className="bg-agency-blue/10 text-agency-blue border-agency-blue/20">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <div className="relative -mt-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[21/9] rounded-lg overflow-hidden border border-border">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-8">
                <article className="prose prose-invert mx-auto max-w-none">
                  {post.content}
                </article>
                
                <Separator className="my-8" />
                
                {/* Article Footer */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border-2 border-border">
                      {post.author.avatar ? (
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      ) : (
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">Author</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <p className="text-sm mr-2">Share:</p>
                    <Button size="icon" variant="outline" className="rounded-full h-8 w-8">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share article</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <Card className="sticky top-24">
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="flex gap-3">
                          <Link to={`/blog/${relatedPost.slug}`} className="shrink-0 w-16 h-16 overflow-hidden rounded-md">
                            <img 
                              src={relatedPost.coverImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover" 
                            />
                          </Link>
                          <div>
                            <Link to={`/blog/${relatedPost.slug}`} className="block font-medium hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </Link>
                            <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.flatMap(p => p.tags))).slice(0, 10).map(tag => (
                        <Link to={`/blog?tag=${tag}`} key={tag}>
                          <Badge variant="outline" className="hover:bg-primary/10">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedPosts.slice(0, 3).map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
