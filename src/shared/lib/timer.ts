export const timer = async (delay: number) =>
	new Promise((resolve) => setTimeout(resolve, delay))
