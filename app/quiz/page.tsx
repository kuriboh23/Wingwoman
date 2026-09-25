import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "L'quiz",
  description: "8 dyal las2ila 3la nharek. 60 secondes. W mn ba3d n9olik chkoun nti.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
