import { PostContainer, TitlePostContainer, LinkNavigate, PostContentContainer } from './styles'
import arrowTopRightIcon from "../../assets/arrow-top-right-icon.svg"
import arrowLeftIcon from '../../assets/arrow-left-solid-icon.svg'
import githubIcon from '../../assets/github-logo.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentIcon from '../../assets/comment-icon.svg'
import { IconAndName } from '../../components/IconAndName'

export function Post() {
    return(
        <PostContainer className='container'>
            <TitlePostContainer>
                <header>
                    <LinkNavigate to='/'>
                    <img src={arrowLeftIcon} />
                        <p>VOLTAR</p>
                    </LinkNavigate>
                    <LinkNavigate to='/'>
                        <p>ver no github</p>
                        <img src={arrowTopRightIcon} />
                    </LinkNavigate>
                </header>
                <main>
                    <h1>JavaScript data types and data structures</h1>
                </main>

                <footer>
                    <IconAndName icon={githubIcon} name='Geliandes'/>
                    <IconAndName icon={calendarIcon} name='Há 1 dia' />
                    <IconAndName icon={commentIcon} name='5 comentários'/>
                </footer>
            </TitlePostContainer>

            <PostContentContainer>
            </PostContentContainer>
        </PostContainer>
    )
}