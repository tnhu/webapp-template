/**
 * Global namespace and module definitions.
 */


//
// Make TypeScript ignore css imports
//
declare module '*.css' {
  const content: any
  export default content
}
