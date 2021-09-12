import { Room } from "../logic/rooms";

function RoomComponent({ room }: { room: Room }) {
  return (
    <div className="border">
      <div>{room.window}</div>
      <div>{room.aisle}</div>
    </div>
  );
}

export default RoomComponent;
