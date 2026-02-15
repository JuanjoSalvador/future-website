import type { PostEntry } from '../types/post-entry';

/**
* Determines if a post should be listed in the blog index.
* @param post - The post to check.
* @param isProduction - Whether the blog is in production.
* @returns True if the post should be listed, false otherwise.
*/
export function isPostListable({ post, isProduction }: { post: PostEntry; isProduction: boolean }) {
  return post.visibility === 'public' || !isProduction;
}

/**
 * Determines if a post can be accessed via URL.
 * @param post - The post to check.
 * @param isProduction - Whether the blog is in production.
 * @returns True if the post can be accessed, false otherwise.
 */
export function isPostAccessible({ post, isProduction }: { post: PostEntry; isProduction: boolean }) {
  if (!isProduction) {
    return true;
  }

  return post.visibility === 'public' || post.visibility === 'url';
}
