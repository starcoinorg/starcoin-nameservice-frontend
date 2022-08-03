import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface NotificationProps {
  link_to: string;
  title: string;
  text: string;
}

export class Notification extends React.Component<NotificationProps> {
  constructor(props: NotificationProps) {
    super(props);
  }
  render() {
    return (
      <div className=" bg-white text-black p-2 mx-4 rounded-lg max-w-2xl self-center">
        <a href="">
          <div className="items-center grid grid-cols-[5em_minmax(10em,42rem)_5em] place-items-center gap-0 lg:gap-4">
            <img
              className=" max-h-10 rounded-full bg-purple-500 p-2"
              src="https://app.ens.domains/static/media/ENSIcon.e806751ddfd6a5b549e599544234f39f.svg"
              alt=""
            />
            <div className=" m-1 grid grid-rows-2 p-1 self-start">
              <div className="text-lg leading-4 font-semibold">
                {this.props.title}
              </div>
              <div className=" text-neutral-400 leading-4">
                {this.props.text}
              </div>
            </div>
            <div className="text-xl text-slate-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </a>
      </div>
    );
  }
}
