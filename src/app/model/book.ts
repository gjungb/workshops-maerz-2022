/**
 * @description A thing to be read
 */
export interface Book {
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
