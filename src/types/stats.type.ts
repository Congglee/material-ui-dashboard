export type Trend = 'up' | 'down' | 'neutral'

export interface Stats {
  title: string
  value: string
  interval: string
  trend: Trend
  data: number[]
}
