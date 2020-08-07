import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

import {
  requestArtistData,
  receiveArtistData,
  receiveArtistError,
} from "../action";
import {
  fetchArtistProfile,
  formatNumOfFollowers,
} from "../helper/api-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const { token, status: tokenStatus } = useSelector((state) => state.auth);
  const { currentArtist, status: artistStatus } = useSelector(
    (state) => state.artists
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestArtistData());

    if (!token) {
      return;
    }
    fetchArtistProfile(token, id)
      .then((res) => res.json())
      .then((data) => dispatch(receiveArtistData(data)))
      .catch(() => dispatch(receiveArtistError()));
  }, [token]);

  if (currentArtist) {
    const {
      name,
      images: [{ url }],
      genres,
      followers: { total: totalFollowers },
    } = currentArtist;
    return (
      <Wrapper>
        {(tokenStatus === "loading" || artistStatus === "loading") && (
          <CircularProgress />
        )}
        <ProfileImg src={url} alt={name} />
        <FollowerDiv>
          <FollowerTotal>{formatNumOfFollowers(totalFollowers)}</FollowerTotal>
          <span>Followers</span>
        </FollowerDiv>
        <Name>{name}</Name>
        <h2>Tags</h2>
        <TagDiv>
          <Tag>{genres[0]}</Tag>
          <Tag>{genres[1]}</Tag>
        </TagDiv>
      </Wrapper>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #0b0f14;

  h2 {
    position: absolute;
    width: 48px;
    height: 26px;
    left: 164px;
    top: 468px;
    font-size: 21px;
    line-height: 26px;
    text-transform: lowercase;
  }
`;

const ProfileImg = styled.img`
  position: absolute;
  width: 175px;
  height: 175px;
  left: 100px;
  top: 59px;
  border-radius: 190.5px;
`;

const Name = styled.div`
  position: absolute;
  width: 268px;
  height: 59px;
  left: 54px;
  top: 173px;

  font-weight: bold;
  font-size: 40px;
  line-height: 59px;
  /* identical to box height */

  /* White */
  color: #ffffff;
  /* Triple shadow */
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
`;

const FollowerDiv = styled.div`
  position: absolute;
  width: 93px;
  height: 17px;
  left: 141px;
  top: 257px;

  font-size: 16px;
  line-height: 17px;
  /* identical to box height */
  text-transform: lowercase;
  color: white;
`;

const FollowerTotal = styled.span`
  color: #ff4fd8;
  margin-right: 8px;
`;

const TagDiv = styled.div`
  position: absolute;
  top: 528px;
  left: 30px;
  width: 315px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Tag = styled.div`
  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  padding: 10px 20px;
`;

export default ArtistRoute;
