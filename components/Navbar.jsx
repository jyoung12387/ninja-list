import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<a>
						<Image src="/logo.png" alt="logo" width={128} height={77} />
					</a>
				</Link>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ninjas">
				<a>Ninja Listing</a>
			</Link>
		</nav>
	);
}
