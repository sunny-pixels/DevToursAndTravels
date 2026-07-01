"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/travel-updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setEmail("");
    } catch {
      setStatus("error");
    }

    // Auto-dismiss after 5 s
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {/* Input + button row */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
        />
        <Button
          type="submit"
          size="lg"
          variant="secondary"
          disabled={status === "loading"}
          className="h-12 px-8"
        >
          {status === "loading" ? "Sending..." : "Get Updates"}
        </Button>
      </div>

      {/* Feedback message — sits below the row, visible for 5 s */}
      {status === "success" && (
        <p className="text-green-300 text-sm text-center mt-3">
          Thank you! We&apos;ll keep you updated.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-300 text-sm text-center mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
