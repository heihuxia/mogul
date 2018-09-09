import React from "react";
import styled from "styled-components";
import variable from "../variable";

const StyledPath = styled.svg`
  fill: #b9b9b9;
  transition: all 0.3s;
  will-change: fill;
  cursor: pointer;
  &:hover {
    fill: ${variable.primary};
  }
`;
export const View = ({ size = 24, onClick }) => {
  return (
    <StyledPath
      className={"view-icon"}
      viewBox={"0 0 1024 1024"}
      width={size}
      height={size}
      onClick={onClick}>
      <path
        d={
          "M512 113.8C146.3 113.8 0 512 0 512s146.3 398.2 512 398.2S1024 512 1024 512 877.6 113.8 512 113.8z m0 672.3C237.7 786.1 128 512 128 512s109.7-274.1 384-274.1c274.2 0 384 274.1 384 274.1S786.3 786.1 512 786.1z m0-444.8c-94.3 0-170.7 76.4-170.7 170.7 0 94.3 76.4 170.7 170.7 170.7S682.7 606.3 682.7 512c0-94.3-76.4-170.7-170.7-170.7z"
        }
      />
    </StyledPath>
  );
};

const StyleCloseIcon = styled.svg`
  cursor: pointer;
  font-size: 40px;
  color: #fff;
  fill: #fff;
  position: fixed;
  right: 30px;
  top: 30px;
`;

export const Close = ({ onClick }) => {
  return (
    <StyleCloseIcon onClick={onClick} viewBox="0 0 1024 1024" width="40" height="40">
      <path d="M721.6 753.6c-8 0-16-3.2-22.4-9.6L280 324.8c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l419.2 419.2c12.8 12.8 12.8 32 0 44.8-6.4 6.4-14.4 9.6-22.4 9.6z" />
      <path d="M302.4 753.6c-8 0-16-3.2-22.4-9.6-12.8-12.8-12.8-32 0-44.8l419.2-419.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L324.8 744c-6.4 6.4-14.4 9.6-22.4 9.6z" />
    </StyleCloseIcon>
  );
};

const StyleActionIcon = styled.svg.attrs({
  className: "action-icon",
  viewBox: "0 0 1024 1024",
  width: 20,
  height: 20
})`
  display: inline;
  vertical-align: middle;
`;

export const Small = () => (
  <StyleActionIcon>
    <path d="M924.8 905.6L720 694.4c67.2-67.2 108.8-158.4 108.8-260.8C828.8 228.8 662.4 64 459.2 64S89.6 228.8 89.6 433.6s164.8 369.6 369.6 369.6c78.4 0 152-24 211.2-67.2l208 214.4c6.4 6.4 14.4 9.6 22.4 9.6 8 0 16-3.2 22.4-9.6 14.4-11.2 14.4-32 1.6-44.8zM153.6 433.6C153.6 265.6 291.2 128 459.2 128s305.6 137.6 305.6 305.6c0 168-137.6 305.6-305.6 305.6S153.6 601.6 153.6 433.6z" />
    <path d="M640 465.6H278.4c-17.6 0-32-14.4-32-32s14.4-32 32-32H640c17.6 0 32 14.4 32 32s-14.4 32-32 32z" />
  </StyleActionIcon>
);

export const Big = () => (
  <StyleActionIcon>
    <path d="M924.8 905.6L720 694.4c67.2-67.2 108.8-158.4 108.8-260.8C828.8 228.8 662.4 64 459.2 64S89.6 228.8 89.6 433.6s164.8 369.6 369.6 369.6c78.4 0 152-24 211.2-67.2l208 214.4c6.4 6.4 14.4 9.6 22.4 9.6 8 0 16-3.2 22.4-9.6 14.4-11.2 14.4-32 1.6-44.8zM153.6 433.6C153.6 265.6 291.2 128 459.2 128c168 0 305.6 137.6 305.6 305.6s-137.6 305.6-305.6 305.6c-168 0-305.6-137.6-305.6-305.6z" />
    <path d="M640 401.6h-148.8v-148.8c0-17.6-14.4-32-32-32s-32 14.4-32 32v148.8h-148.8c-17.6 0-32 14.4-32 32s14.4 32 32 32h148.8v148.8c0 17.6 14.4 32 32 32s32-14.4 32-32v-148.8H640c17.6 0 32-14.4 32-32s-14.4-32-32-32z" />
  </StyleActionIcon>
);

export const FitScreen = () => (
  <StyleActionIcon>
    <path d="M560.222793 381.509017 738.680231 203.323778 599.320253 63.962777l357.480764 0 0 357.482811L817.440016 282.08254 639.254777 460.542025 560.222793 381.509017zM560.222793 640.113843l178.458461 178.185238L599.320253 957.661106l357.480764 0 0-357.481787L817.440016 739.541343 639.254777 561.082882 560.222793 640.113843zM459.678866 640.113843 281.221428 818.299081l139.362025 139.362025L63.100642 957.661106l0-357.481787 139.362025 139.362025 178.185238-178.458461L459.678866 640.113843zM459.678866 381.509017 281.221428 203.323778 420.583452 63.962777 63.100642 63.962777l0 357.482811 139.362025-139.362025L380.647905 460.542025 459.678866 381.509017zM459.678866 381.509017" />
  </StyleActionIcon>
);

export const RotateIcon = () => (
  <StyleActionIcon>
    <path d="M908.8 64c-12.8 0-32 12.8-32 32v172.8l-25.6-25.6c-51.2-44.8-128-108.8-192-128-108.8-38.4-224-32-326.4 12.8-102.4 51.2-185.6 140.8-224 256-83.2 224 32 467.2 262.4 550.4 51.2 19.2 96 25.6 147.2 25.6 172.8 0 339.2-108.8 403.2-288 6.4-12.8 0-32-19.2-38.4-12.8-6.4-32 0-38.4 19.2-76.8 192-281.6 294.4-473.6 224-192-76.8-294.4-281.6-224-473.6 38.4-96 102.4-172.8 198.4-217.6 83.2-38.4 185.6-38.4 275.2-12.8 51.2 19.2 121.6 70.4 166.4 115.2l38.4 38.4H640c-12.8 0-32 12.8-32 32s12.8 32 32 32h268.8c19.2 0 32-12.8 32-32V96c0-19.2-19.2-32-32-32z" />
  </StyleActionIcon>
);

export const PresentMode = () => (
  <StyleActionIcon>
    <path d="M928 86.4H96c-17.6 0-32 14.4-32 32s14.4 32 32 32h22.4v500.8c0 52.8 43.2 96 96 96h161.6L297.6 880c-9.6 14.4-4.8 35.2 11.2 43.2 4.8 3.2 11.2 4.8 16 4.8 11.2 0 20.8-4.8 27.2-16l99.2-164.8h123.2L673.6 912c6.4 9.6 16 16 27.2 16 6.4 0 11.2-1.6 16-4.8 14.4-9.6 20.8-28.8 11.2-43.2l-78.4-131.2h161.6c52.8 0 96-43.2 96-96V150.4H928c17.6 0 32-14.4 32-32s-14.4-32-32-32z m-84.8 564.8c0 17.6-14.4 32-32 32H214.4c-17.6 0-32-14.4-32-32V150.4h660.8v500.8z" />
    <path d="M331.2 628.8c17.6 0 32-14.4 32-32v-158.4c0-17.6-14.4-32-32-32s-32 14.4-32 32v158.4c0 17.6 12.8 32 32 32zM515.2 628.8c17.6 0 32-14.4 32-32V259.2c0-17.6-14.4-32-32-32s-32 14.4-32 32v337.6c0 17.6 14.4 32 32 32zM694.4 628.8c17.6 0 32-14.4 32-32V350.4c0-17.6-14.4-32-32-32s-32 14.4-32 32v246.4c0 17.6 14.4 32 32 32z" />
  </StyleActionIcon>
);