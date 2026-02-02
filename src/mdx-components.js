import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components'
import LatestPublications from './app/_components/latest-publications'
 
const defaultComponents = getNextraComponents({
  wrapper({ children, toc }) {
    return (
      <>
        <div className='p-4' style={{ flexGrow: 1 }}>{children}</div>
      </>
    )
  }
})
 
export const useMDXComponents = components => ({
  ...defaultComponents,
  LatestPublications,
  ...components
})