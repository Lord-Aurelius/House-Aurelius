const GOOGLE_DRIVE_FILE_RE = /\/file\/d\/([^/]+)\//

export function extractGoogleDriveFileId(url) {
  const match = url.match(GOOGLE_DRIVE_FILE_RE)
  return match ? match[1] : null
}

export function toGoogleDriveDownloadUrl(url) {
  const fileId = extractGoogleDriveFileId(url)
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url
}
