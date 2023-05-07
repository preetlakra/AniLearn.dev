import Container from "@layouts/Container";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button_Tech from "@components/Button_Tech";

type Props = {};

const INITIAL_VALUE: {
  top: number;
  right: number;
  bottom: number;
  left: number;
} = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

import {
  Heading_1,
  Heading_2,
  Paragraph,
} from "@components/Tech/Typography_Tech";

export default function Position({}: Props) {
  const [position, setPosition] = useState("static");
  const [positionValue, setPositionValue] = useState(INITIAL_VALUE);
  const [validPosition, setValidPosition] = useState<"top" | "bottom">("top");

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setPositionValue({ ...positionValue, [name]: Number(value) });
  };

  return (
    <Container className="relative pt-12 pb-24">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        Position
      </small>

      <Heading_1>Position</Heading_1>
      <Paragraph margin={true}>
        The position property specifies the type of positioning method used for
        an element (static, relative, fixed, absolute or sticky).
      </Paragraph>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      <div className="relative w-full mt-12 overflow-y-auto border rounded-lg bg-box h-96 border-white-low-opacity">
        <nav
          className={`${position} flex items-center w-full h-12 px-4 text-black z-20 ${
            position == "absolute" ? "bg-white/90" : "bg-white"
          }`}
          style={
            validPosition == "top"
              ? {
                  top: positionValue.top,
                  left: positionValue.left,
                }
              : {
                  right: positionValue.right,
                  bottom: positionValue.bottom,
                }
          }
        >
          <h1>Navbar</h1>
        </nav>
        <motion.section layout="position" className="p-4">
          <h2 className="mb-3 text-3xl text-white">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
          </p>
          <h2 className="mt-8 mb-3 text-3xl text-white">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
          </p>
          <h2 className="mt-8 mb-3 text-3xl text-white">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore
            doloremque eum et debitis repellendus inventore accusamus deserunt
            corrupti autem officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi,
            explicabo impedit sed ut dolore doloremque eum et debitis
            repellendus inventore accusamus deserunt corrupti autem officiis?
          </p>
        </motion.section>
      </div>
      {/* buttons for changing the position of the navbar  */}
      <div className="flex flex-wrap gap-4 mt-12">
        <Button_Tech
          value="static"
          setClassName={setPosition}
          classNameValue="static"
          className={position}
        />
        <Button_Tech
          value="relative"
          setClassName={setPosition}
          classNameValue="relative"
          className={position}
        />
        <Button_Tech
          value="absolute"
          setClassName={setPosition}
          classNameValue="absolute"
          className={position}
        />
        <Button_Tech
          value="fixed"
          setClassName={setPosition}
          classNameValue="fixed"
          className={position}
        />
        <Button_Tech
          value="sticky"
          setClassName={setPosition}
          classNameValue="sticky"
          className={position}
        />
      </div>
      <div className="my-12 space-x-4">
        <label htmlFor="validPosition_1">
          <input
            type="radio"
            name="validPosition"
            id="validPosition_1"
            onClick={(e) => e.isTrusted && setValidPosition("top")}
          />
          Top
        </label>
        <label htmlFor="validPosition_2">
          <input
            type="radio"
            name="validPosition"
            id="validPosition_2"
            onClick={(e) => e.isTrusted && setValidPosition("bottom")}
          />
          Bottom
        </label>
      </div>
      {/* Range for changing the position of the navbar  */}
      <div className="grid gap-8 md:grid-cols-2">
        <Range
          filterName="top"
          maxNum={100}
          value={positionValue.top}
          onChange={onChangeHandler}
        />
        <Range
          filterName="left"
          maxNum={100}
          value={positionValue.left}
          onChange={onChangeHandler}
        />
        <Range
          filterName="bottom"
          maxNum={100}
          value={positionValue.bottom}
          onChange={onChangeHandler}
        />
        <Range
          filterName="right"
          maxNum={100}
          value={positionValue.right}
          onChange={onChangeHandler}
        />
      </div>
    </Container>
  );
}

type RangeProps = {
  maxNum: number;
  filterName: string;
  value: number;
  onChange: (e: any) => void;
};

const Range = ({ maxNum, filterName, value, ...otherProps }: RangeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] range-slider">
        <input
          className="range-slider__range"
          type="range"
          name={filterName}
          value={value}
          max={maxNum}
          {...otherProps}
        />
        <span className="range-slider__value">{value}</span>
      </div>
    </div>
  );
};
