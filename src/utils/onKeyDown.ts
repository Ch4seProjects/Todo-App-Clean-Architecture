export const handleKeyDown = (e: React.KeyboardEvent, cb: () => void) => {
  if (e.key === "Enter") cb();
};
