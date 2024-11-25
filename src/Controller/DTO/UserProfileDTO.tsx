import TagDTO from "./TagDTO.tsx";

export default interface UserProfileDTO {
    nickname: string|undefined;
    status: string|undefined;
    description: string|undefined;
    birthday: string|undefined;
    sex: string|undefined;
    link_to_avatar: string|undefined;
    tags: TagDTO[]|null;
}