import Link from "next/link";
import { FormulaOneIcon } from "./icons/formulaOne";

export function Navbar() {
	return (
		<header className="bg-base-100 h-[var(--app-bar-height)] flex items-center p-3 fixed left-0 right-0 top-0 justify-between shadow-2xl z-10">
			<Link href="/" >
				<FormulaOneIcon className="h-14 w-14 transition-colors hover:fill-red-700" />
			</Link>
			<nav>
				<Link href="/schedule" className="text-white transition-colors hover:text-red-700 font-semibold">
					Schedule
				</Link>
			</nav>
		</header>
	);
}