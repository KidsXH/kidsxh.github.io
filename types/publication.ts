// The type of a publication
export type Publication = {
    title: string;
    authorsPrev: string;
    authorsPost: string;
    year: number;
    venue: string;
    venueAbbr: string;
    doi: string;
    date: string;
    code: string;
    video: string;
    published: boolean;
    coverImage: string;
    award: string;
    coFirstAuthor: boolean;
}

export const PublicationFields = [
    'title',
    'authorsPrev',
    'authorsPost',
    'year',
    'venue',
    'venueAbbr',
    'doi',
    'date',
    'code',
    'video',
    'published',
    'coverImage',
    'award',
    'coFirstAuthor'
];