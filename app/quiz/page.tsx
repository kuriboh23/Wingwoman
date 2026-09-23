import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "The quiz",
  description: "Nine questions about your day. Sixty seconds. Then we'll tell you which girl you are.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
