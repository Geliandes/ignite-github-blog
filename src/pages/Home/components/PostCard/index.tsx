import { daysDifference } from "../../../../utils/daysDifference";
import { PostCardContainer, PostTextWrapper, PostTitle } from "./style";

interface PostCardProps{
    title: string;
    created_at: string;
    content: string;
}

export function PostCard({ title, created_at, content }: PostCardProps) {
    created_at = daysDifference(created_at);

    return(
        <PostCardContainer>
            <PostTitle>
                <p>{title}</p>
                <span>{created_at}</span>
            </PostTitle>

            <PostTextWrapper>
                <p>{content}</p>
            </PostTextWrapper>

        </PostCardContainer>
    )
}