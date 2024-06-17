export default function SvgIcon({
	name,
	prefix = 'icon',
	color = 'currentColor',
	strokeColor = undefined,
	size = 22,
	height,
	onClick
}: {
	name: string;
	prefix?: string;
	color?: string;
	strokeColor?: string;
	size?: number;
	height?: number;
	onClick?: () => void;
}) {
	const symbolId = `#${prefix}-${name}`;

	return (
		<svg
			width={size}
			height={height || size}
			aria-hidden='true'
			onClick={onClick}
		>
			<use href={symbolId} fill={color} stroke={strokeColor} />
		</svg>
	);
}
