"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, CheckCircle, Loader } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signup } from "../action";
import { loginSchema } from "../../schema";
import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		setSuccess("");
		setError("");

		await startTransition(() => {
			signup(values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sign Up Creators AI</CardTitle>
				<CardDescription>With access, you&apos;re the legend!</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-2"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<LoginForm.Success message={success} />
						<LoginForm.Error message={error} />
						<Button className="gap-2" disabled={isPending}>
							{isPending && <Loader className="size-4 animate-spin" />}
							Login
						</Button>
					</form>
				</Form>
				<div className="pt-2 text-center">
					<Button variant="link" onClick={() => router.push("/login")}>
						Log In
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

LoginForm.Error = function LoginFormError({ message }: { message?: string }) {
	if (!message) return null;
	return (
		<div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
			<AlertTriangle className="size-4" />
			<p>{message}</p>
		</div>
	);
};

LoginForm.Success = function LoginFormSuccess({
	message,
}: {
	message?: string;
}) {
	if (!message) return null;
	return (
		<div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
			<CheckCircle className="size-4" />
			<p>{message}</p>
		</div>
	);
};

export default LoginForm;
