import React from "react";
import styled, { keyframes } from "styled-components";
import wheel from "./wheel-of-fortune.png";

interface Props {

}

const Rotate = (start: number, stop:number) => keyframes`
    from {
    transform: rotate(${start}deg);
  }
  to {
    transform: rotate(${stop}deg);
  }
`

const Image = styled.img`
    animation: ${Rotate(0,360)} 2.5s linear;
    animation-duration: 10s;
`

const Wheel: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Image src={wheel}/>
        </div>
    );
}

export default Wheel;
