import { publicStats } from '../data/content'

const METRICS_PATH = '/public/metrics'
const API_SOURCES = [
  { key: 'HAES', baseUrl: import.meta.env.VITE_HAES_PUBLIC_API_BASE_URL },
  { key: 'HAPOS', baseUrl: import.meta.env.VITE_HAPOS_PUBLIC_API_BASE_URL },
  { key: 'HARE', baseUrl: import.meta.env.VITE_HARE_PUBLIC_API_BASE_URL },
  { key: 'CHURCH_LIB', baseUrl: import.meta.env.VITE_CHURCH_LIB_PUBLIC_API_BASE_URL },
  { key: 'HIFATHI', baseUrl: import.meta.env.VITE_HIFATHI_PUBLIC_API_BASE_URL },
]

function normalizeMetrics(payload) {
  if (!payload || !Array.isArray(payload.metrics)) {
    return []
  }

  return payload.metrics
    .filter((item) => item && item.label && item.value !== undefined)
    .map((item) => ({
      label: String(item.label),
      value: String(item.value),
    }))
}

async function fetchMetricsForSource(source) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 4500)

  try {
    if (!source.baseUrl) {
      return []
    }

    const response = await fetch(`${source.baseUrl}${METRICS_PATH}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })

    if (!response.ok) {
      return []
    }

    const payload = await response.json()
    return normalizeMetrics(payload).map((item) => ({
      label: `${source.key}: ${item.label}`,
      value: item.value,
    }))
  } catch {
    return []
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function getPublicMetrics() {
  const activeSources = API_SOURCES.filter((item) => item.baseUrl)
  if (!activeSources.length) {
    return { metrics: publicStats, source: 'fallback' }
  }

  try {
    const responses = await Promise.all(activeSources.map(fetchMetricsForSource))
    const mergedMetrics = responses.flat()
    if (!mergedMetrics.length) {
      return { metrics: publicStats, source: 'fallback' }
    }
    return { metrics: mergedMetrics, source: 'api' }
  } catch {
    return { metrics: publicStats, source: 'fallback' }
  }
}
