import { IconAndNameContainer } from "./style";

interface IconAndNameProps {
    icon: string;
    name: string | number;
}
export function IconAndName({ icon, name }:IconAndNameProps  ) {
    return(
        <IconAndNameContainer>
            <img src={icon} alt="name" />
            <span>{name}</span>
            
        </IconAndNameContainer>
    )
}