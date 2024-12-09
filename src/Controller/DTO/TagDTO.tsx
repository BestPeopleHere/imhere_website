import TagCategory from "./TagCategory.tsx";

export default interface TagDTO {
    id: number;
    tag_name: string;
    tagCategory: TagCategory;
}