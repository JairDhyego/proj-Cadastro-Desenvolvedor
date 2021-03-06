import React from "react";

import * as C from "./styles";

interface SelectOptionProps {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

function SelectOption({
  title,
  description,
  icon,
  selected,
  onClick,
}: SelectOptionProps) {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
}

export default SelectOption;
