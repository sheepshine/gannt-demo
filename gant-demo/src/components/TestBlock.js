/*
 * @Author: yangchaoben
 * @Date: 2021-04-26 10:01:10
 * @LastEditTime: 2021-04-26 14:17:54
 * @LastEditors: yangchaoben
 * @Description:
 * @FilePath: \gant-demo\src\components\TestBlock.js
 */
import React from "react";
import randomcolor from "randomcolor"

function TestBlock(props) {
  const {item, order} = props;
  function drag(e, item) {
    localStorage.drapItemName = item.name;
    console.log(e, "start", item);
  }
  console.log(11111)
  return (
    <div
      draggable="true"
      data-drag-id={item.name}
      data-drag-order={order}
      onDragStart={(e) =>drag(e, item)}
      style={{
        background: randomcolor(),
        fontSize: 12,
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      <div data-drag-id={item.name}>{item.start}</div>
      <div data-drag-id={item.name}>{item.end}</div>
    </div>
  );
}

export default React.memo(TestBlock);
