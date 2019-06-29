export default function getUrl(url: string) {
	return window.location.hostname === 'localhost' ? `http://localhost:3000${url}` : `https://eloquent-server.herokuapp.com${url}`;
}