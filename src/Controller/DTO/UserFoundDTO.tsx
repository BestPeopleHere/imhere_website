import TagDTO from "./TagDTO.tsx";

export default interface UserFoundDTO {
    id: number;
    nickname: string|undefined;
    description: string|undefined;
    link_to_avatar: string|undefined;
    tags: TagDTO[]|null;
}