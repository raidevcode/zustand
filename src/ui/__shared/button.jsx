import clsx from 'clsx'

export const Button = ({
  title,
  width,
  height,
  backgroundColor,
  color,
  onPress,
  disabled,
  icon,
  className
}) => {
  return (
    <button
      style={{ width, height, backgroundColor, color }}
      className={clsx(
        'rounded-[5px] block gap-4 py-2 px-3',
        disabled ? 'hover:cursor-not-allowed opacity-60' : 'hover:opacity-90 hover:cursor-pointer',
        icon && 'flex justify-center items-center',
        className
      )}
      onClick={onPress}
      disabled={disabled}
    >
      <span>{title}</span>
      {icon}
    </button>
  )
}
