import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat
					ut ad ea, temporibus ipsam quisquam facere vero fuga omnis. Eveniet
					necessitatibus similique rerum. Iure dolorum laudantium fugit magni
					optio vero quo quaerat, sit molestiae labore, ratione commodi corporis
					eum sunt officiis? Non est voluptate assumenda similique accusamus eos
					eveniet ducimus odio debitis pariatur quas ullam placeat expedita
					mollitia libero qui numquam saepe atque accusantium rerum porro,
					sapiente voluptatum. Possimus quasi temporibus dolores ipsum
					consequuntur? Adipisci, velit alias repellat consequatur, harum aut
					exercitationem, accusantium nihil sed nobis neque blanditiis
					aspernatur totam recusandae et eligendi praesentium rem facilis
					inventore sequi est?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat
					ut ad ea, temporibus ipsam quisquam facere vero fuga omnis. Eveniet
					necessitatibus similique rerum. Iure dolorum laudantium fugit magni
					optio vero quo quaerat, sit molestiae labore, ratione commodi corporis
					eum sunt officiis? Non est voluptate assumenda similique accusamus eos
					eveniet ducimus odio debitis pariatur quas ullam placeat expedita
					mollitia libero qui numquam saepe atque accusantium rerum porro,
					sapiente voluptatum. Possimus quasi temporibus dolores ipsum
					consequuntur? Adipisci, velit alias repellat consequatur, harum aut
					exercitationem, accusantium nihil sed nobis neque blanditiis
					aspernatur totam recusandae et eligendi praesentium rem facilis
					inventore sequi est?
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
