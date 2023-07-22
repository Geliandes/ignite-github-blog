import { useContext } from "react";
import { GitHubContext } from "../contexts/GithubContext";

export function useGithub() {
  const context = useContext(GitHubContext);
  return context;
}