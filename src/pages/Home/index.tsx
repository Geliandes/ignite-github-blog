import { HomeContainer, SummaryContainer,DetailsContainer, NameAndIconContainer, IconContainer, SearchPostContainer, PostsContainer } from "./styles";
import perfilImg from '../../assets/perfil.jpg'
import { NavLink } from "react-router-dom";
import { IconAndName } from "../../components/IconAndName";
import arrowIcon from '../../assets/arrow-top-right-icon.svg'
import githubIcon from '../../assets/github-logo.svg'
import jobIcon from '../../assets/job-icon.svg'
import perfilIcon from '../../assets/perfil-icon.svg'
import { PostCard } from "./components/PostCard";


export function Home() {
    return(
        <HomeContainer className="container"> 

            <SummaryContainer>
                <img src={perfilImg} alt="foto de perfil" />
                <DetailsContainer>

                    <NameAndIconContainer>
                        <h1>Paulo Geliandes</h1>

                        <NavLink to={"https://github.com/geliandes"} target="_blank">
                            <div>                          
                                <span>GITHUB</span>
                                <img src={arrowIcon} alt=""/>
                            </div>
                        </NavLink>

                    </NameAndIconContainer>

                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                    <IconContainer>      
                        <IconAndName icon={githubIcon} name="Geliandes" />
                        <IconAndName icon={jobIcon} name="Cogna" />
                        <IconAndName icon={perfilIcon} name="32 seguidores" />
                    </IconContainer>

                </DetailsContainer>
            </SummaryContainer>

            <SearchPostContainer>
                <div>
                    <p>Publicações</p>
                    <span>6 publicações</span>
                </div>
                <input placeholder="Buscar conteúdo"></input>
            </SearchPostContainer>

            <PostsContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </PostsContainer>
        </HomeContainer>
    )
}