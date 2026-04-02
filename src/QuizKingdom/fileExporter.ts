/**
 * File Exporter: Utility for exporting quiz results to a downloadable text file
 * Uses browser Blob API to create and download files
 */

import { QuizSession } from "./quizDefinitions.js";

/**
 * Format a Date object as a readable string
 */
function formatDate(date: Date): string {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * Calculate quiz duration in minutes and seconds
 */
function calculateDuration(startTime: Date, endTime: Date): string {
  const durationMs = endTime.getTime() - startTime.getTime();
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);

  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ${seconds} second${seconds !== 1 ? "s" : ""}`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  }
}

/**
 * Format quiz session data as readable text
 */
function formatQuizResults(session: QuizSession): string {
  const lines: string[] = [];

  // Header
  lines.push("=".repeat(70));
  lines.push("TYPELAND QUIZ RESULTS");
  lines.push("=".repeat(70));
  lines.push("");

  // Student information
  lines.push(`Student Name: ${session.studentName}`);
  lines.push(`Quiz Started: ${formatDate(session.startTime)}`);

  if (session.endTime) {
    lines.push(`Quiz Completed: ${formatDate(session.endTime)}`);
    lines.push(
      `Duration: ${calculateDuration(session.startTime, session.endTime)}`,
    );
  }

  lines.push(`Total Questions: ${session.responses.length}`);
  lines.push("");
  lines.push("-".repeat(70));
  lines.push("");

  // Questions and answers
  session.responses.forEach((response, index) => {
    lines.push(`Question ${index + 1}:`);
    lines.push(response.questionText);
    lines.push("");
    lines.push(`Answer:`);
    lines.push(response.answer);
    lines.push("");
    lines.push(`Answered at: ${formatDate(response.timestamp)}`);
    lines.push("");

    if (index < session.responses.length - 1) {
      lines.push("-".repeat(70));
      lines.push("");
    }
  });

  // Footer
  lines.push("=".repeat(70));
  lines.push("END OF QUIZ RESULTS");
  lines.push("=".repeat(70));

  return lines.join("\n");
}

/**
 * Generate a filename for the quiz results
 */
function generateFilename(studentName: string): string {
  // Clean student name for filename (remove special characters)
  const cleanName = studentName
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

  // Add timestamp
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:]/g, "-");

  return `quiz-results-${cleanName}-${timestamp}.txt`;
}

/**
 * Export quiz results as a downloadable text file
 *
 * @param session - The completed quiz session to export
 */
export function exportQuizResults(session: QuizSession): void {
  // Format the quiz results as text
  const textContent = formatQuizResults(session);

  // Create a Blob with the text content
  const blob = new Blob([textContent], { type: "text/plain" });

  // Create a download URL
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element to trigger download
  const link = document.createElement("a");
  link.href = url;
  link.download = generateFilename(session.studentName);

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(url);
}
