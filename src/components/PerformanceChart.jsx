import { useEffect, useRef } from 'react'

// Minimal, dependency-free tiny chart using canvas for mobile mockup
export default function PerformanceChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth
    const height = 160
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Mock data (monthly)
    const labels = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul']
    const penjualan = [180, 210, 200, 230, 260, 280, 300]
    const hpp = [90, 110, 105, 120, 130, 140, 150]
    const operasional = [40, 45, 42, 50, 52, 55, 60]
    const laba = penjualan.map((v, i) => v - hpp[i] - operasional[i])

    const maxVal = Math.max(...penjualan) * 1.2
    const px = (v) => height - (v / maxVal) * (height - 24)
    const x = (i) => 16 + (i * (width - 32)) / (labels.length - 1)

    // Clear
    ctx.clearRect(0, 0, width, height)

    // Grid
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1
    for (let i = 0; i < 4; i++) {
      const gy = ((height - 24) / 4) * i + 12
      ctx.beginPath()
      ctx.moveTo(12, gy)
      ctx.lineTo(width - 12, gy)
      ctx.stroke()
    }

    const drawLine = (arr, color) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.beginPath()
      arr.forEach((v, i) => {
        const cx = x(i)
        const cy = px(v)
        if (i === 0) ctx.moveTo(cx, cy)
        else ctx.lineTo(cx, cy)
      })
      ctx.stroke()
    }

    drawLine(penjualan, '#10b981') // green
    drawLine(operasional, '#f59e0b') // orange
    drawLine(hpp, '#3b82f6') // blue
    drawLine(laba, '#22c55e') // darker green

    // Dots
    const drawDots = (arr, color) => {
      ctx.fillStyle = color
      arr.forEach((v, i) => {
        ctx.beginPath()
        ctx.arc(x(i), px(v), 3, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    drawDots(penjualan, '#10b981')
    drawDots(operasional, '#f59e0b')
    drawDots(hpp, '#3b82f6')
    drawDots(laba, '#22c55e')
  }, [])

  return (
    <section className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-700">Grafik Performa</p>
        <div className="flex items-center gap-3 text-xs">
          <Legend color="#10b981" label="Penjualan" />
          <Legend color="#3b82f6" label="HPP" />
          <Legend color="#f59e0b" label="Biaya Operasional" />
          <Legend color="#22c55e" label="Laba Bersih" />
        </div>
      </div>
      <div className="w-full" style={{ height: 160 }}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </section>
  )
}

function Legend({ color, label }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="w-2 h-2 rounded" style={{ backgroundColor: color }} />
      <span className="text-gray-600">{label}</span>
    </span>
  )
}
