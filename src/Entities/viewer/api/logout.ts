import api from "@/Shared/api";
export async function logoutHTTP(): Promise<void> {
	return api.post("/logout", {});
}
