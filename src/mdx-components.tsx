import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: (props) => (
    <h1 className="text-xl font-medium mb-4" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props) => <h2 className="font-medium text-justify">{props.children}</h2>,
  li: (props) => <li className="font-medium pl-2">{props.children}</li>,
  p: (props) => <p className="text-justify font-medium">{props.children}</p>,
  ol: (props) => <ol className="list-decimal pl-2 space-y-2 text-justify">{props.children}</ol>,
  ul: (props) => <ul className="list-disc pl-2 space-y-2 text-justify">{props.children}</ul>,
  a: (props) => (
    <a href={props.href} className="text-blue-300 underline">
      {props.children}
    </a>
  ),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
