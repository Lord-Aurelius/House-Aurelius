export function SunIcon({ size = 28, color = '#f3cc6b', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="22" fill="none" stroke={color} strokeWidth="7" />
      <polygon points="50,4 57,18 43,18" />
      <polygon points="50,96 57,82 43,82" />
      <polygon points="4,50 18,57 18,43" />
      <polygon points="96,50 82,57 82,43" />
      <polygon points="15.1,15.1 27.5,24.2 18.4,32.5" />
      <polygon points="84.9,84.9 72.5,75.8 81.6,67.5" />
      <polygon points="84.9,15.1 75.8,27.5 67.5,18.4" />
      <polygon points="15.1,84.9 24.2,72.5 32.5,81.6" />
    </svg>
  )
}
