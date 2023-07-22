import { HomeContainer, SummaryContainer,DetailsContainer, NameAndIconContainer, IconContainer, SearchPostContainer, PostsContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { IconAndName } from "../../components/IconAndName";
import arrowIcon from '../../assets/arrow-top-right-icon.svg'
import githubIcon from '../../assets/github-logo.svg'
import jobIcon from '../../assets/job-icon.svg'
import perfilIcon from '../../assets/perfil-icon.svg'
import { PostCard } from "./components/PostCard";
import { useGithub } from "../../hooks/useGithub";
import { ChangeEvent } from "react";

export function Home() {
    const { postsGit, githubData, searchPost } = useGithub();
    const { avatar_url, name, html_url, bio, login, company, followers } = githubData;
    const { items, total_count } = postsGit;

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>){
        const searchTerm = event.target.value
        searchPost("geliandes", 'ignite-github-blog', searchTerm);
    }
 
    return(
        <HomeContainer className="container"> 
            <SummaryContainer>
                <img src={avatar_url} alt="foto de perfil" />
                <DetailsContainer>

                    <NameAndIconContainer>
                        <h1>{name}</h1>
                        <NavLink to={html_url} target="_blank">
                            <div>                          
                                <p>GITHUB</p>
                                <img src={arrowIcon} alt=""/>
                            </div>
                        </NavLink>
                    </NameAndIconContainer>

                    <p>{bio}</p>

                    <IconContainer>      
                        <IconAndName icon={githubIcon} name={login} />
                        <IconAndName icon={jobIcon} name={company} />
                        <IconAndName icon={perfilIcon} name={`${followers} seguidores`} />
                    </IconContainer>

                </DetailsContainer>
            </SummaryContainer>

            <SearchPostContainer>
                <div>
                    <p>Publicações</p>
                    <span>{total_count} publicações</span>
                </div>
                <input placeholder="Buscar conteúdo" onChange={handleSearchChange}></input>
            </SearchPostContainer>

            <PostsContainer>
                {items.map((item) => {
 
                    return(
                    <NavLink to={`/post/${item.number}`} key={item.number}>
                        <PostCard 
                            title={item.title} 
                            content={item.body} 
                            created_at={item.created_at} 
                        />
                    </NavLink>
                    )
                })}
            </PostsContainer>
        </HomeContainer>
    )
}