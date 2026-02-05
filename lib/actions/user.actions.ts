'use server';

import {signInFormSchema} from "../validators";
import {isRedirectError} from "next/dist/client/components/redirect-error";

import {signIn, signOut} from "../../auth";

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse(
            {
                email: formData.get('email'),
                password: formData.get('password'),
            }
        );
        await signIn('credentials', user);

        return {success: true, message: "Signed In Successfully"};
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        return {success: false, error: "Invalid email or password"};
    }
}

export async function signOutUser() {
    await signOut();
}