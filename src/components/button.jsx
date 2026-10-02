import clsx from 'clsx'

export default function Button({
  title,
  width,
  height,
  backgroundColor,
  color,
  onClick,
  disabled,
  icon,
  className
}) {
  return (
    <button
      style={{ width, height, backgroundColor, color }}
      className={clsx(
        'rounded-[5px] block gap-4 py-2 px-3',
        disabled
          ? 'hover:cursor-not-allowed opacity-60'
          : 'hover:opacity-90 hover:cursor-pointer',
        icon && 'flex justify-center items-center',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
      {icon}
    </button>
  )
}
