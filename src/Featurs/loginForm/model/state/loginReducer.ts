import { loginUser } from "../thunks/AT-loginUser";

export function loginReducer(builder: any) {
	console.log(builder);
	builder.addCase(loginUser.pending, (state: any) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(loginUser.fulfilled, (state: any, action: any) => {
		state.firstLoading = false;
		localStorage.setItem("token", action.payload.accessToken);
		state.isLoaging = false;
		state.isAuth = true;
		state.currentUser = action.payload.user;
	});
	builder.addCase(loginUser.rejected, (state: any, action: any) => {
		state.firstLoading = false;
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
