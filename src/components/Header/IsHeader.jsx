import useMedia from "../../Hooks/useMedia";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

export default function IsHeader() {
  const { mobile } = useMedia("(max-width:767px)");

  return mobile ? <HeaderMobile /> : <Header />;
}
