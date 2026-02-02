import type {MDXComponents} from 'nextra/mdx-components';
import {useMDXComponents as getBlogComponents} from 'nextra-theme-blog';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getBlogComponents(),
    ...components,
  };
}
