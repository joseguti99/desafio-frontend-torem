import { MyProfileProps } from '../types/chat';
import { urlApi } from '../utils/urlApi';
import profile from '../assets/images/profile.png'

function MyProfile(myProfileProps: MyProfileProps) {
  const { name, lastName, email, photo } = myProfileProps;

  return (
    <>
      {name?.length && lastName?.length && email?.length && photo?.length ?
        <div className="myProfile d-flex flex-row gap-3 align-items-center text-no-selection">
          <div className="myProfilePhoto">
            <img src={`${urlApi}/${photo}` || profile} alt="ProfilePhoto" className="image" />
          </div>
          <div className="myProfileData">
            <div className="myProfileId fw-bold">
              {name} {lastName}
            </div>
            <div className="myProfileEmail fs-smaller">{email}</div>
          </div>
        </div>
        : ""}
    </>

  );
}

export default MyProfile;
