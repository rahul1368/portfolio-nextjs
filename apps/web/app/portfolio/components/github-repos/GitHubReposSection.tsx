"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Button } from "@repo/ui";
import { theme } from "../../theme";
import { Github, ExternalLink, Star, GitFork, Calendar, Code } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  size: number;
  default_branch: string;
}

interface GitHubReposSectionProps {
  username: string;
  maxRepos?: number;
}

export function GitHubReposSection({ username, maxRepos = 12 }: GitHubReposSectionProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        console.error('Error fetching GitHub repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, maxRepos]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatSize = (bytes: number) => {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  if (loading) {
    return (
    <section id="github-repos" className={`${theme.section.padding} relative`}>
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-transparent to-blue-500/3 [.dark_&]:from-violet-400/5 [.dark_&]:via-transparent [.dark_&]:to-blue-400/5"></div>
      <div className={`${theme.section.container} relative z-10`}>
        <div className={theme.section.maxWidth}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border border-violet-500/20 [.dark_&]:border-violet-400/20 mb-6">
                <Github className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">GitHub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 [.dark_&]:text-slate-100">My GitHub Repositories</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-2xl mx-auto mb-12">
                Explore my open-source projects and contributions
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-violet-500 [.dark_&]:border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300">Loading repositories...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
    <section id="github-repos" className={`${theme.section.padding} relative`}>
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-transparent to-blue-500/3 [.dark_&]:from-violet-400/5 [.dark_&]:via-transparent [.dark_&]:to-blue-400/5"></div>
      <div className={`${theme.section.container} relative z-10`}>
        <div className={theme.section.maxWidth}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 [.dark_&]:bg-rose-400/10 text-rose-600 [.dark_&]:text-rose-400 border border-rose-500/20 [.dark_&]:border-rose-400/20 mb-6">
                <Github className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-semibold">GitHub</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 [.dark_&]:text-slate-100">My GitHub Repositories</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-2xl mx-auto mb-12">
                Explore my open-source projects and contributions
              </p>
              <div className="bg-rose-500/10 [.dark_&]:bg-rose-400/10 border border-rose-500/20 [.dark_&]:border-rose-400/20 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-sm sm:text-base text-rose-600 [.dark_&]:text-rose-400">
                  Unable to load repositories: {error}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-repos" className={`${theme.section.padding} relative`}>
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/3 via-transparent to-blue-500/3 [.dark_&]:from-violet-400/5 [.dark_&]:via-transparent [.dark_&]:to-blue-400/5"></div>
      <div className={`${theme.section.container} relative z-10`}>
        <div className={theme.section.maxWidth}>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border border-violet-500/20 [.dark_&]:border-violet-400/20 mb-6">
              <Github className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold">GitHub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 [.dark_&]:text-slate-100">My GitHub Repositories</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-2xl mx-auto mb-8">
              Explore my open-source projects and contributions. Here are my most recently updated repositories.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600 [.dark_&]:text-slate-400">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-violet-500 [.dark_&]:bg-violet-400"></div>
                <span>Recently Updated</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-500 [.dark_&]:text-amber-400" />
                <span>Starred</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3 text-emerald-500 [.dark_&]:text-emerald-400" />
                <span>Forked</span>
              </div>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {repos.map((repo, index) => (
              <Card 
                key={repo.id} 
                className="group relative overflow-hidden bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-500/10 [.dark_&]:hover:shadow-violet-400/10 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 [.dark_&]:text-slate-100 group-hover:text-violet-600 [.dark_&]:group-hover:text-violet-400 transition-colors duration-300 truncate">
                        {repo.name}
                      </CardTitle>
                      <p className="text-sm text-slate-600 [.dark_&]:text-slate-400 mt-1">
                        {repo.full_name}
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      asChild
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  
                  {repo.description && (
                    <p className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 leading-relaxed line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Language and Topics */}
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs sm:text-sm bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20">
                        <Code className="w-3 h-3 mr-1" />
                        {repo.language}
                      </Badge>
                    )}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs sm:text-sm bg-slate-100/50 [.dark_&]:bg-slate-700/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-600/50">
                        {topic}
                      </Badge>
                    ))}
                    {repo.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs sm:text-sm bg-slate-100/50 [.dark_&]:bg-slate-700/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-600/50">
                        +{repo.topics.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-600 [.dark_&]:text-slate-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500 [.dark_&]:text-amber-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3 text-emerald-500 [.dark_&]:text-emerald-400" />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">{formatSize(repo.size * 1024)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-500 [.dark_&]:text-blue-400" />
                      <span className="text-xs">{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20 hover:bg-violet-500/20 [.dark_&]:hover:bg-violet-400/20 hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30" 
                    variant="outline"
                    asChild
                  >
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20 hover:bg-violet-500/20 [.dark_&]:hover:bg-violet-400/20 hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30"
              variant="outline"
              asChild
            >
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Repositories
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
