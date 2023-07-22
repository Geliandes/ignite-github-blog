import { api } from "../lib/axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface GitHubContextType {
  githubData: GitHubProfileProps;
  postsGit: GitHubPostsProps;
  searchPost: (username:string, repositoryName:string, term?:string) => void
}

interface GitHubProfileProps {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  company: string;
  followers: number;
  html_url: string;
}

interface Issue {
  html_url: string;
  title: string;
  created_at: string;
  user: {
    login: string;
  };
  body: string;
  comments: number;
  number: number;
}


interface GitHubPostsProps {
  total_count: number;
  items: Issue[];
}

interface GitHubContextProps {
  children: ReactNode;
}


export const GitHubContext = createContext({} as GitHubContextType)

export function GithubProvider({ children }: GitHubContextProps) {
  const [githubData, setGithubData] = useState<GitHubProfileProps>({
    name: "",
    bio: "",
    avatar_url: "",
    login: "",
    company: "",
    followers: 0,
    html_url: ""
  });

  const [postsGit, setPostsGit] = useState<GitHubPostsProps>({
    total_count: 0,
    items: []
  })

  const fetchInfo = async () => {
    try {
      const response = await api.get<GitHubProfileProps>(`/users/geliandes`);

      const { 
        name, 
        bio, 
        avatar_url, 
        login, 
        company, 
        followers, 
        html_url 
      } = response.data

      setGithubData({
        name, 
        bio, 
        avatar_url, 
        login, 
        company, 
        followers, 
        html_url 
      })

    } catch (error) {
      console.error('Erro ao buscar informações:', error);
    }
  };

  const fetchIssues = async (username:string, repositoryName:string, term?:string) => {
    try {
      const response = await api.get<GitHubPostsProps>(`/search/issues`, {
        params: {
          q: `${term ?? ''} repo:${username}/${repositoryName}`
        }
      })

      const posts = response.data.items.map((item) => ({
        html_url: item.html_url,
        title: item.title,
        created_at: item.created_at,
        comments: item.comments,
        user: { login: item.user.login },
        body: item.body,
        number: item.number
      }));
      
      setPostsGit({
        total_count: response.data.total_count,
        items: posts
      })
    } catch (error) {
      console.error('Erro ao buscar informações:', error);
    }
  }

  function searchPost(username:string, repositoryName:string, term?:string){
    fetchIssues(username, repositoryName, term).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    fetchInfo().catch((error) => {
      console.error('Erro no useEffect:', error);
    });
    searchPost("geliandes", 'ignite-github-blog');
  }, []);

  return(
    <GitHubContext.Provider value={{githubData, postsGit, searchPost}}>
        {children}
    </GitHubContext.Provider>
  )
}