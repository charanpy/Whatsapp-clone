import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { selectProfilePhoto } from "../../redux-sagas/user/user.selector";
import { ImageContainer } from "./ProfileImage.style";

const ProfileImage = ({ profilePic }) => {
  console.log(profilePic);
  return (
    <ImageContainer
      src={profilePic && profilePic}
      alt="user-photo"
      loading="lazy"
    />
  );
};

ProfileImage.propTypes = {
  profilePic: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  profilePic: selectProfilePhoto
});

export default connect(mapStateToProps)(ProfileImage);
