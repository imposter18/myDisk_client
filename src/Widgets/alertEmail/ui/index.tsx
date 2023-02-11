import React from "react";
import { AlertDialog } from "@/Shared/ui/alert";
import { IUser } from "@/Shared/Types/IUser";

interface props {
	user: IUser;
}

export const AlertEmail = ({ user }: props) => {
	const message = "A confirmation email has been sent to your inbox";

	return (
		<>{!user.isActivated && <AlertDialog message={message}></AlertDialog>}</>
	);
};
