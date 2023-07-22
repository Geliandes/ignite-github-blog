import { PostContainer, TitlePostContainer, LinkNavigate, PostContentContainer } from './styles'
import arrowTopRightIcon from "../../assets/arrow-top-right-icon.svg"
import arrowLeftIcon from '../../assets/arrow-left-solid-icon.svg'
import githubIcon from '../../assets/github-logo.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import commentIcon from '../../assets/comment-icon.svg'
import { IconAndName } from '../../components/IconAndName'
import { useParams } from 'react-router-dom'
import { useGithub } from '../../hooks/useGithub'
import { daysDifference } from '../../utils/daysDifference'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs' 

export function Post() {

    const { postsGit } = useGithub();
    const { idPost } = useParams();
    const filteredItems = postsGit.items.filter((item) => item.number === Number(idPost))

    if(filteredItems.length === 0) {
        return(
            <h1>Post not found</h1>
        )
    } else{
        const { html_url, body ,comments,created_at ,title, user } = filteredItems[0];
        const created_at_formatted = daysDifference(created_at);

        return(
            <PostContainer className='container'>
                <TitlePostContainer>
                    <header>
                        <LinkNavigate to={'/'}>
                        <img src={arrowLeftIcon} />
                            <p>VOLTAR</p>
                        </LinkNavigate>
                        <LinkNavigate to={html_url}>
                            <p>ver no github</p>
                            <img src={arrowTopRightIcon} />
                        </LinkNavigate>
                    </header>
                    <main>
                        <h1>{title}</h1>
                    </main>

                    <footer>
                        <IconAndName icon={githubIcon} name={user.login}/>
                        <IconAndName icon={calendarIcon} name={`${created_at_formatted}`} />
                        <IconAndName icon={commentIcon} name={comments}/>
                    </footer>
                </TitlePostContainer>

                <PostContentContainer>
                <ReactMarkdown
                    children={body}
                    components={{
                    code({inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}

                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
                            style={dracula as any}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        );
                    },
                    }}
                />
                </PostContentContainer>
            </PostContainer>
        )
    }
}