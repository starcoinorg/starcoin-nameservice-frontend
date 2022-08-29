import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Auth/Auth";
import { DomainList } from "../components/DomainList/DomainList";
import { Nav } from "../components/Nav/Nav";
import { Notification } from "../components/Notification/Notification";
import { SetPrimaryDomain } from "../components/SetPrimaryDomain/SetPrimaryDomain";
import { SideNav } from "../components/SideNav/SideNav";

export function DashBoard() {
  let loc = useLocation();
  let { user } = React.useContext(AuthContext);
  let nav = useNavigate();
  console.log(loc.pathname);
  let value = 1;
  let content = null;
  switch (loc.pathname) {
    case "/dashboard":
      value = 1;
      if (user) {
        content = (
          <>
            <div className=" mx-4">
              <Notification
                link_to="/"
                title="some info"
                text="lorem ipsum sit dolor amet!"
              />
              <SetPrimaryDomain />
            </div>
            <DomainList
              enable_checkbox={false}
              onClick={(domain) => {
                nav("/domain/" + domain.name + "." + domain.parent);
              }}
              domains={user.holdings}
            />
          </>
        );
      } else {
        alert("Please login first!");
        return <Navigate to="/" />;
      }
      break;
    case "/domains":
      value = 2;
      break;
    case "/faq":
      value = 3;
      let qa = [];
      for (let index = 0; index < 4; index++) {
        qa.push(
          <div className="my-8">
            <div className="text-2xl font-bold m-2 hover:text-blue-500">
              When Lorem ipsum?
            </div>
            <ul className=" grid grid-flow-row lg:grid-cols-2">
              <li>
                <div className="text-lg font-semibold">
                  What is Lorem Ipsum?
                </div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </li>
              <li>
                <div className="text-lg font-semibold">
                  What is Lorem Ipsum?
                </div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </li>
            </ul>
          </div>
        );
      }
      content = (
        <div className="m-4 p-8  rounded-lg backdrop-blur-md bg-white bg-opacity-20 text-white">
          <div>{qa}</div>
        </div>
      );
      break;
    case "/about":
      value = 4;
      window.location.replace("https://www.starcoin.org");
    default:
      break;
  }
  return (
    <div className="home">
      <Nav />
      <div className="flex justify-between my-4">
        <SideNav activate={value}></SideNav>
        <div className="min-w-[100%] lg:min-w-[80%]">{content}</div>
      </div>
    </div>
  );
}
