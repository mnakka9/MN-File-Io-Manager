export interface UploadStatus {
  success: boolean
  status: number
  id: string
  key: string
  name: string
  link: string
  expires: string
  expiry: string
  downloads: number
  maxDownloads: number
  autoDelete: boolean
  size: number
  mimeType: string
  created: string
  modified: string
}
