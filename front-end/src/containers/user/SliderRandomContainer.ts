import SliderRandom from "components/user/homePage/homeComponents/sliderRandom/SliderRandom";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(SliderRandom);
