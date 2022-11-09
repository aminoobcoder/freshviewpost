import { User } from "./user";

export interface Post {
    id: number;
    user_id: number;
    title: string;
    body: string;
}

export interface PostDeatils {
    post: Post
    user:User
}