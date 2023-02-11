import * as flags from "./flags";
import { flagsMap } from "./flagsMap";
import { IconProps } from "./types/iconProps";

export function FlagIcon(
	{ className, flagName }: {className: string, flagName: string}
) {
	const flagsKey = flagsMap[flagName];
	const Flag = (flags as any)[flagsKey] as React.FC<IconProps> | undefined;
	return Flag ? <Flag className={className} /> : <flags.Unknown className={className} />;
}