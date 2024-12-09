interface TagCategory {
    id: number;
    category_name: string;
}

export default interface TagDTO {
    tag_id: number;
    tag_name: string;
    tag_category: TagCategory;
}