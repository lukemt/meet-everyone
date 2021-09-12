import { Room } from "./rooms";

// log for every person how many times they have met every other person
export function initStatistic(persons: string[]) {
  return persons.reduce(
    (acc, person) => ({
      ...acc,
      [person]: persons.reduce(
        (accInner, person) => ({
          ...accInner,
          [person]: 0,
        }),
        {}
      ),
    }),
    {}
  );
}

// go through every room and log for every person who he/she has met
export function logStatistic(
  statistic: { [key: string]: { [key: string]: number } },
  rooms: Room[]
) {
  return rooms.reduce((acc, room) => {
    if (room.window && room.aisle) {
      acc[room.window][room.aisle] += 1;
      acc[room.aisle][room.window] += 1;
    }
    return acc;
  }, statistic);
}
