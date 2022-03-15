/**
 * @description A thing to be read
 */
export interface Book {
    /**
     * @link {https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer}
     */
    isbn: string;
    /**
     * @description The title of the book
     */
    title: string;
    author: string;
    /**
     * @description A short summary of the content
     */
    abstract?: string;
}
