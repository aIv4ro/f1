const options = {
	weekday: 'short',
	hour: '2-digit',
	minute: '2-digit'
} as Intl.DateTimeFormatOptions;

export function SessionTime(
	{date, name}: {date: Date, name: string}
) {
	return (
		<>
			<span>{name}</span> 
			<span>{date.toLocaleString(undefined, options).toUpperCase()}</span>
		</>
	)
}