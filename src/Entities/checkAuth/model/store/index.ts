import { checkAuth } from "../thunks/AT-checkAuth";

export function checkAuthReduser(builder: any) {
	builder.addCase(checkAuth.pending, (state: any) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(checkAuth.fulfilled, (state: any, action: any) => {
		state.firstLoading = false;
		localStorage.setItem("token", action.payload.accessToken);
		state.isLoaging = false;
		state.isAuth = true;
		state.currentUser = action.payload.user;
	});
	builder.addCase(checkAuth.rejected, (state: any, action: any) => {
		state.firstLoading = false;
		state.isLoaging = false;
		if (action) {
			state.error = action.payload.message;
		} else {
			state.error = action.error.message;
		}
	});
}
