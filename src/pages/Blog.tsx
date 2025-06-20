
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogData } from '@/lib/blog-data';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Debug logging
  console.log('Blog posts loaded:', blogData);
  console.log('Number of blog posts:', blogData?.length || 0);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogData.flatMap(post => post.tags))
  );
  
  console.log('All tags:', allTags);
  
  // Filter posts based on search term
  const filteredPosts = blogData.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  console.log('Filtered posts:', filteredPosts);
  console.log('Search term:', searchTerm);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Blog - Dievektor - Web Development & Digital Agency</title>
        <meta name="description" content="Read our latest articles on web development, design trends, SEO optimization and technology advancements." />
        <meta name="keywords" content="web development blog, design trends, SEO tips, AI in web design, progressive web apps" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Our Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Insights, tutorials, and thoughts on web development, design, and digital strategy
              </p>
              <div className="max-w-md mx-auto">
                <Input 
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-background/60 backdrop-blur-sm"
                />
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {allTags.map((tag, index) => (
                  <Badge 
                    key={`${tag}-${index}`}
                    variant="outline" 
                    className="cursor-pointer bg-background/60 backdrop-blur-sm hover:bg-primary/10"
                    onClick={() => setSearchTerm(String(tag))}
                  >
                    {String(tag)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Debug info display */}
            <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
              <p><strong>Debug Info:</strong></p>
              <p>Total blog posts: {blogData?.length || 0}</p>
              <p>Filtered posts: {filteredPosts?.length || 0}</p>
              <p>Search term: "{searchTerm}"</p>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    featured={index === 0} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or browse all articles by clearing the search.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:underline"
                >
                  View all articles
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-agency-purple/20 via-agency-blue/20 to-agency-pink/20 backdrop-blur-sm rounded-xl p-8 lg:p-12 text-center max-w-3xl mx-auto animate-fade-in border border-primary/20">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gradient">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background/60 backdrop-blur-sm flex-grow"
                />
                <button className="bg-gradient hover:opacity-90 text-white py-2 px-6 rounded-md text-sm font-medium">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
