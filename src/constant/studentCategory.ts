export const STUDENT_CATEGORIES = [
  { value: "Residential", label: "Residential (আবাসিক)" },
  { value: "Non-Residential", label: "Non-Residential (অনাবাসিক)" },
  { value: "Day Care", label: "Day Care (ডে কেয়ার)" },
  // { value: "Non-Residential One Meal", label: "Non-Residential One Meal" },
  { value: "Residential No Meal", label: "Residential No Meal" },
  // { value: "Day Care One Meal", label: "Day Care One Meal" },
] as const;

export type StudentCategory = typeof STUDENT_CATEGORIES[number]["value"];

export const STUDENT_CATEGORY_VALUES = STUDENT_CATEGORIES.map((c) => c.value);

export const STUDENT_CATEGORY_MAP = Object.fromEntries(
  STUDENT_CATEGORIES.map((c) => [c.value, c])
) as Record<StudentCategory, typeof STUDENT_CATEGORIES[number]>;

export const DEFAULT_STUDENT_CATEGORY: StudentCategory = "Residential";
