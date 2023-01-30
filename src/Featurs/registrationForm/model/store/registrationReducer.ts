import { registrationUser } from "../thunks/AT-registrationUser";

export function registrationReduser(builder: any) {
	builder.addCase(registrationUser.pending, (state: any) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(registrationUser.fulfilled, (state: any, action: any) => {
		localStorage.setItem("token", action.payload.accessToken);
		state.isLoaging = false;
		state.isAuth = true;
		state.currentUser = action.payload.user;
	});
	builder.addCase(registrationUser.rejected, (state: any, action: any) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload.message;
		} else {
			state.error = action.error.message;
		}
	});
}
