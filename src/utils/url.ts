export function getNpmUrl(username: string) {
  return `https://www.npmjs.com/package/${username}`
}

export function getIconUrl(username: string, repoName: string) {
  return `https://raw.githubusercontent.com/${username}/${repoName}/refs/heads/main/assets/icon.png`
}

export function getRepoUrl(username: string, repoName: string) {
  return `https://github.com/${username}/${repoName}`
}

export function getVscodeUrl(username: string, repoName: string) {
  return `https://marketplace.visualstudio.com/items?itemName=${username}.${repoName}`
}

export function getWebUrl(username: string, repoName: string) {
  return `https://${username}.github.io/${repoName}`
}
