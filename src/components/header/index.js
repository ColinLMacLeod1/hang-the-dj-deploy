import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Hang the DJ</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
					<Link href="/party">Party</Link>
                    <Link href="/spotify">Spotify</Link>
                    <Link href="/settings">Settings</Link>
					<Link href="/spotify/?code=NoCodeYet">Spotify</Link>
				</nav>
			</header>
		);
	}
}
