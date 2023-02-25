export function Card(
	{children, className}: {children?: JSX.Element, className?: string},
) {
	return (
		<article className={`bg-base-300 rounded-lg p-3 shadow-xl ${className}`}>
			{children && children}
		</article>
	)
}