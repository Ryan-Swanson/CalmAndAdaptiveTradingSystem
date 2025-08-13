"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HealthPage() {
	const [status, setStatus] = React.useState<string>("loading...");
	const [error, setError] = React.useState<string | null>(null);

	React.useEffect(() => {
		const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";
		fetch(`${backendUrl}/health`)
			.then(async (r) => {
				if (!r.ok) throw new Error(`HTTP ${r.status}`);
				const data = await r.json();
				setStatus(String(data.status ?? "unknown"));
			})
			.catch((e) => setError(e.message));
	}, []);

	return (
		<div className="container mx-auto max-w-xl p-6">
			<Card>
				<CardHeader>
					<CardTitle>Backend Health</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-2">
						<div className="text-sm text-neutral-500">Source: /health</div>
						<div className="text-lg font-medium">{error ? `Error: ${error}` : status}</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}


