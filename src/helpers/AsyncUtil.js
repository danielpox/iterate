export default class AsyncUtil {
	static Timer(time) {
		return new Promise((res, rej) => {
			setTimeout(res, time);
		});
	};
}