import PropTypes from "prop-types";
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";

const answersVolumeStat = (props) => {
  const {answersVolume} = props;
  console.log("stat");
  console.log(answersVolume);
  let data = [];
  let x, y;
  {
    answersVolume.map((element) => {
      console.log("element");
  console.log(element);
          x = element.answer;
          y = element.volume;
          data.push({ x, y });
    });
  }
  return (
    <div style={{ margin: "auto", width: 500 }}>
      <XYPlot xType="ordinal" height={200} width={500}>
        <HorizontalGridLines />
        <VerticalBarSeries data={data} />
        <XAxis />
        <YAxis
          title="chosen times"
          style={{
            line: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
          }}
        />
      </XYPlot>
    </div>
  );
};

answersVolumeStat.propTypes = {
  answersVolume: PropTypes.object.isRequired,
};

export default answersVolumeStat;
