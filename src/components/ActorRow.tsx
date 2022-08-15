import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Actor } from "../models/actors";

type ActorRowProps = {
  actor: Actor;
};

const ShowRow: FC<ActorRowProps> = ({ actor }) => {
  return (
    <div className=" border-2 w-72 pb-4 rounded-lg  bg-gray-600 ">
      <div className=" flex flex-col  items-center ">
        <div className="flex flex-col items-stretch  rounded-md ">
          <img
            className="mx-auto w-72 h-72 rounded-md object-cover "
            src={
              actor.image?.medium ||
              "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
            }
          />
          <div className=" flex items-center flex-col">
            <h3 className="text-2xl">{actor.name}</h3>
            <h3 className="text-xl">
              Nationality:-
              <span className="pl-1" />
              {actor.country?.name}
            </h3>
            <h3 className="text-xl">
              DOB:-
              <span className="pl-1" />
              {actor.birthday}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowRow.defaultProps = {};

export default memo(ShowRow);
