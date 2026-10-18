/**
 * Font Awesome is loaded as a stylesheet, so an icon is just a classed <i>.
 * Wrapping it keeps the aria-hidden consistent — icons here are always
 * decorative, with the meaning carried by adjacent text.
 */
export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <i
      className={className ? `${name} ${className}` : name}
      aria-hidden="true"
    />
  );
}
