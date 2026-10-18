/** Date helpers shared by the availability bar, enquiry form and booking widget. */

export const todayISO = () => new Date().toISOString().split("T")[0];

/** The day after `date`, as an ISO date string. */
export const dayAfter = (date: string) => {
  const next = new Date(date);
  next.setDate(next.getDate() + 1);
  return next.toISOString().split("T")[0];
};
