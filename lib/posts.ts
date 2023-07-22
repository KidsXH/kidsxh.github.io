import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import {Publication, PublicationFields} from '../types/publication';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  // Read .md files from _posts directory
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export const getStaticProps = async () => {
  let fields = [...PublicationFields];
  fields.push('slug');
  const allPosts = getAllPosts(fields);
  return {
    props: {allPosts},
  };
};
