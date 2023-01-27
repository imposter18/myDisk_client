import React, { useEffect } from "react";
import { SignForm } from "@/Entities/signForm/index";
import { RegistrationForm } from "@/Featurs/registrationForm/index";

export const RegistrationWidget = () => {
	return (
		<SignForm>
			<RegistrationForm></RegistrationForm>
		</SignForm>
	);
};
