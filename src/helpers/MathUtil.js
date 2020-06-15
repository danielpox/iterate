export default class MathUtil {
	static Clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	};

	static ClampBottom(value, min) {
		return Math.max(min, value);
	}
}