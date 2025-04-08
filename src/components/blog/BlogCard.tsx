
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="object-cover w-full h-full transition-transform hover:scale-105" 
          />
        </div>
      </Link>
      
      <CardHeader className="pt-5">
        <div className="flex space-x-2 mb-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-agency-blue/10 text-agency-blue border-agency-blue/20">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`} className="block">
          <CardTitle className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} hover:text-primary transition-colors`}>
            {post.title}
          </CardTitle>
        </Link>
        <CardDescription className="flex items-center text-xs space-x-4 mt-2">
          <div className="flex items-center">
            <CalendarDays className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex items-center text-sm">
          <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
