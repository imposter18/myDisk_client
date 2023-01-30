import { logoutUser } from "../thunks/AT-logoutUser";

export function logoutReducer(builder: any) {
	builder.addCase(logoutUser.pending, (state: any) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(logoutUser.fulfilled, (state: any, action: any) => {
		localStorage.removeItem("token");
		state.isLoaging = false;
		state.isAuth = false;
		state.currentUser = {};
	});
	builder.addCase(logoutUser.rejected, (state: any, action: any) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload.message;
		} else {
			state.error = action.error.message;
		}
	});
}
