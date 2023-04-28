export const getErrorMessage = (error: unknown): string => {
  const hasMessage =
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string";

  if (hasMessage) {
    return error.message as string;
  }

  return JSON.stringify(error);
};
