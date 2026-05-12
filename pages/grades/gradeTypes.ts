export type GradeType = "quiz" | "assignment" | "log";

export type GradeStatus = "graded" | "pending" | "submitted";

export type GradeFeedback =
  | {
      kind: "download";
      label: string;
      href: string;
      download?: boolean;
    }
  | {
      kind: "link";
      label: string;
      href: string;
    }
  | {
      kind: "pending";
      label?: string;
    }
  | {
      kind: "none";
      label?: string;
    };

export interface Grade {
  type: GradeType;
  title: string;
  submitted: string;
  status: GradeStatus;
  grade: string;
  feedback: GradeFeedback;
}

export interface GradesDatabase {
  studentName: string;
  grades: Grade[];
}
