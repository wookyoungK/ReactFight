import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextTimeline } from "../../common/mockData";
import { addTimeline } from "../state";
import TimelineList from "../component/TimelineList.js";
import { useSelector } from "react-redux";

export default function TimelineMain() {
  const timelines = useSelector(state => state.timeline.timelines);
  function onAdd() {
    //원래는 서버에서 데이터를 가져오는 부분
    const timeline = getNextTimeline();
    store.dispatch(addTimeline(timeline));
  }
  console.log("TimelineMain render");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
