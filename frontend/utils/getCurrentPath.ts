export function getCurrentPath(pathname: string) {
  const parsedPath = pathname.split('/')[2] || 'home'

  return parsedPath
}