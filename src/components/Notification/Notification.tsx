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
      <div className="backdrop-blur-md bg-white bg-opacity-20 text-white p-4 rounded-lg max-w-2xl self-center min-w-full">
        <a href={this.props.link_to}>
          <div className="items-center flex justify-between place-items-center gap-0 lg:gap-4">
            <img
              className=" max-h-10 rounded-full bg-purple-500 p-2"
              src="https://app.ens.domains/static/media/ENSIcon.e806751ddfd6a5b549e599544234f39f.svg"
              alt=""
            />
            <div className=" m-1 grid grid-rows-2 p-1 self-start w-full">
              <div className="text-lg leading-4 font-semibold">
                {this.props.title}
              </div>
              <div className=" text-neutral-300 leading-4">
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
