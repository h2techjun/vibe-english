import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fisher-Yates 셔플 (비파괴 — 새 배열 반환).
 * build.ts / cloze.ts / listen-card 에 흩어져 있던 동일 구현의 단일 진실원.
 */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * epoch ms → 로컬 날짜 키 (YYYY-M-D). "같은 날" 판정용 —
 * 스트릭(stats), 일일 신규 한도(repository) 등이 공유한다.
 */
export function dayKey(ms: number): string {
  const d = new Date(ms)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
