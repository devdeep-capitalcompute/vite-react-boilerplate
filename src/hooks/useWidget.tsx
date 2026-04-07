import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useWidgetUser(user) {
	useEffect(() => {
		if (user && window.__gfpWidget) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			window.__gfpWidget.setUser({
				id: "user.id",
				name: "user.name",
				email: "user.email@email.com",
				role: "user.role",
				tenant: "user.tenant",
			});
		} else if (!user && window.__gfpWidget) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			window.__gfpWidget.clearUser();
		}
	}, [user]);
}
