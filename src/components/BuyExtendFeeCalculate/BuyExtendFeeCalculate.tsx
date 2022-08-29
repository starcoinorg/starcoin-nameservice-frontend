import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Random } from "mockjs";
import React from "react";

function mockPrice(n: number): number {
  return n * 3;
}

function mockGas(n: number): number {
  return n * Random.natural(0, 100) * 0.001;
}

function mockEstimate(n: number): string {
  return (n * 0.1).toFixed(2);
}

export function BuyExtendFeeCalculate() {
  let [year, setYear] = React.useState(1);
  let mock_price = mockPrice(year);
  let mock_gas = mockGas(year);
  let mock_estimate = mockEstimate(mock_price + mock_gas);
  return (
    <div>
      <div className="grid grid-flow-row gap-2 p-2">
        <div className=" text-orange-400 ">
          {" "}
          <FontAwesomeIcon icon={faCircleExclamation} /> Increase registration
          period to avoid paying gas every year
        </div>
        <div className="flex justify-between mx-8">
          <button
            className="btn-thin"
            onClick={() => {
              setYear(year >= 2 ? year - 1 : year);
            }}
          >
            -
          </button>
          <div className="text-2xl">{year}</div>
          <button
            className="btn-thin"
            onClick={() => {
              setYear(year + 1);
            }}
          >
            +
          </button>
        </div>
        <div className=" items-center text-center">
          <div className="text-xl">
            {mock_price +
              " STC with + at most " +
              mock_gas.toFixed(4) +
              " STC gas fee = at most " +
              (+mock_price + mock_gas).toFixed(4) +
              " STC"}
          </div>
        </div>
        <div>{"Estimated price in USD: $" + mock_estimate}</div>

        <div className="flex justify-between mx-4">
          <button
            className="btn-thin"
            onClick={(e) => {
              setTimeout(() => {
                alert(
                  "You will be charged $" + mock_estimate + " for this action"
                );
              }, 1000);
            }}
          >
            Ok
          </button>
          <button
            className="btn-thin"
            onClick={(e) => {
              setTimeout(() => {
                alert("transaction cancelled");
              }, 1000);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
