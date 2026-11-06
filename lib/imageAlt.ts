import { hotel } from "@/content/hotel";

/**
 * A real caption for a room photograph.
 *
 * "Deluxe Double with Balcony, photo 3" describes a position in an
 * array, not a picture. Google Images ranks on the alt text, the file
 * name and the surrounding copy, and a screen-reader user gets nothing
 * useful from an index either, so both audiences are served by saying
 * what is actually in the frame.
 *
 * The shared photographs appended to every room are the ones worth
 * naming individually: a bathroom shot captioned "mountain view room"
 * is wrong, and wrong alt text is worse than generic alt text.
 */
const SHARED: Record<string, string> = {
  "window-01": "Balcony doors open onto the valley",
  "bathroom-01": "Private bathroom with a hot walk-in shower",
  "bathroom-02": "Washbasin and mirror in the private bathroom",
  "bathroom-03": "Walk-in shower with hot water and toiletries",
  "sunrise-01": "Sunrise over the mist in the valley below",
};

export const roomImageAlt = (image: string, roomName: string) => {
  const subject = SHARED[image] ?? `Inside the ${roomName}`;
  return `${subject} at ${hotel.name}, ${hotel.location}`;
};
