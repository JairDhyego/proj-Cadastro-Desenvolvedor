import React from "react";

import * as C from "./styles";

interface HeaderProps {}

function Header() {
  return (
    <C.Container>
      <h1>Cadastro de desenvolvedor</h1>
      <p>Faça seu cadastro na lista e receba seu emprego imediatamente</p>
    </C.Container>
  );
}

export default Header;
