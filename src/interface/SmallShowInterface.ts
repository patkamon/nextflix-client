export interface SmallShowInterface {
    id: string;
    name: string;
    image: string;
    description?: string;
    type?: "anime" | "tv" | "movie";
    status?: "new" | "popular" | "trending" | "upcoming" | "classic";
    isTop10?: boolean;
    isNetflixOriginal?: boolean;
}