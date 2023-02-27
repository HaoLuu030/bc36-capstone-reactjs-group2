import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatTimeDateDay, formatTimeDateTim } from "../../../../utils";
import * as _ from "lodash";
import { Divider } from "antd";

export default function PlayTime() {
  //group playTime by days of the week
  const [playingDays, setPlayingDays] = useState([]);
  const theaterState = useSelector((state) => state.theaterReducer);
  //map the time in the object so that it takes to form of the days of of the week
  const mappedPlayTime = theaterState.playTime.map((element) => {
    return {
      ...element,
      ngayChieuGioChieu: formatTimeDateDay(element.ngayChieuGioChieu),
    };
  });
  //group them by the days of the week based on the objects that had been mapped
  const mappedByPlayingDay = _.groupBy(mappedPlayTime, "ngayChieuGioChieu");
  //mmappedByPlayingDay is gonna take the form of an object {thứ tư: [{...}, {...}]}, so we need to create an array using the keys of the objects
  const playingDaysList = Object.keys(mappedByPlayingDay);
  const renderPlayTime = () => {
    return playingDays?.map((keyName, i) => {
      return (
        <div className="col-12">
          <p>{keyName}</p>
          <Divider />
          <div className="row">
            {mappedByPlayingDay[keyName]?.map((elem) => {
              const maLichChieu = elem.maLichChieu;
              const idx = theaterState.playTime.findIndex(
                (elem) => elem.maLichChieu === maLichChieu
              );
              return (
                <div className="col-3">
                  <button>
                    {formatTimeDateTim(
                      theaterState.playTime[idx].ngayChieuGioChieu
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    setPlayingDays(playingDaysList);
  }, [theaterState.playTime]);
  //when the user clicks to choose other theater brand or other theater, reset the list
  useEffect(() => {
    setPlayingDays([]);
  }, [theaterState.theaterBrandList, theaterState.theaterList]);
  return (
    <div className="col-3">
      PlayTime
      <div className="row">{renderPlayTime()}</div>
    </div>
  );
}
