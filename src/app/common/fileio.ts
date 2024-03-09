export interface FileIo {
  success: boolean
  status: number
  nodes: Node[]
  count: number
  size: number
  screeningStatus: string
}

export interface Node {
  id: string
  key: string
  path: string
  nodeType: string
  name: string
  title: any
  description: any
  size: number
  link: string
  private: boolean
  expires: string
  downloads: number
  maxDownloads: number
  autoDelete: boolean
  planId: number
  screeningStatus: string
  mimeType: string
  created: string
  modified: string
}
