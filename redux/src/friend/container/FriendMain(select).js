import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend, setAgeLimit, setShowLimit } from "../state";
import FriendList from "../component/FriendList.js";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import NumberSelect from "../component/NumberSelect";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";

export default function FriendMain() {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendWithAgeShowLimit] =
    useSelector((state) => {
      const { ageLimit, showLimit, friends } = state.friend;
      const friendsWithAgeLimit = friends.filter(
        (item) => item.age <= ageLimit
      );
      return [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeLimit.slice(0, showLimit),
      ];
    }, shallowEqual);
  const dispatch = useDispatch();
  function onAdd() {
    //원래는 서버에서 데이터를 가져오는 부분
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends = {friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
