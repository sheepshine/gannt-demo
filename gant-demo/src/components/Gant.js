/*
 * @Author: yangchaoben
 * @Date: 2021-04-26 09:17:10
 * @LastEditTime: 2021-04-26 14:17:21
 * @LastEditors: yangchaoben
 * @Description:
 * @FilePath: \gant-demo\src\components\Gant.JS
 */
import Gantt from "../lib/lib"; // 引入组件
import dayjs from "dayjs";
import TestBlock from "./TestBlock";
import { mockDatas } from "../mock/index.js";

function Gant() {
  const  mockDatas =[
    {
      id:'test',
      name:'test',
      gtArray:[
        {
          name:'test',
          start:'2021-04-26 14:20:18',
          end:'2021-04-26 20:50:18'
        },
        {
          name:'test',
          start:'2021-04-26 20:50:18',
          end:'2021-04-27 02:18:18'
        },
        {
          name:'test',
          start:'2021-04-27 02:18:18',
          end:'2021-04-27 10:18:18'
        }
      ]
    },
    // {
    //   id:'test2',
    //   name:'test2',
    //   gtArray:[
    //     {
    //       name:'test2',
    //       start:'2021-04-26 11:18:18',
    //       end:'2021-04-26 14:18:18'
    //     },
    //     {
    //       name:'test2',
    //       start:'2021-04-26 14:18:18',
    //       end:'2021-04-26 18:18:18'
    //     },
    //     {
    //       name:'test2',
    //       start:'2021-04-26 18:18:18',
    //       end:'2021-04-27 2:18:18'
    //     }
    //   ]
    // }
  ]
  function wrapTestBlock(
    data,
    getPositonOffset,
    getWidthAbout2Times,
    isInRenderingTimeRange,
    startTimeOfRenderArea,
    endTimeOfRenderArea
  ) {
    // `getPositonOffset(time:string):number `
    // 定位函数，根据给定字符串形式的时间生成相对时间轴起点的的偏移值

    // `getWidthAbout2Times(start:string,end:string):number`
    // 为宽度计算函数，根据给定字符串形式的时间计算两个时间差的宽度值

    // `isInRenderingTimeRange(time:string):boolean`
    // 判定给定的时间是否在屏幕显示的时间轴范围之内

    // startTimeOfRenderArea 屏幕当前显示范围的开始时间的毫秒数

    // endTimeOfRenderArea 屏幕当前显示范围的结束时间的毫秒数

    return data.gtArray.map((item, index) => {
      if (
        isInRenderingTimeRange(item.start) ||
        isInRenderingTimeRange(item.end)
      ) {
        return (
          <div
            className="yourBlockContainer"
            key={item.id}
            style={{
              position: `absolute`,
              left: getPositonOffset(item.start) + "px",
              width: getWidthAbout2Times(item.start, item.end) + "px",
            }}
          >
            <TestBlock item={item} order={index} />
          </div>
        );
      }
      return null;
    });
  }

  function TestLeft(data){
    return (
      <div className="myleftblock">{data.name}</div>
    )
  }

  return (
    <div className="App">
      <div style={{ height: `100vh`, width: "100vw" }}>
        <Gantt
          datas={mockDatas}
          // datas={mockDatas(100, 10, [
          //   dayjs().subtract(5, "hour").toString(),
          //   dayjs().add(29, "day").add(2, "hour").toString(),
          // ])}
          dataKey={"id"} // 最好传递key值，不然可能会出现闪动
          startTime={dayjs().toString()}
          endTime={dayjs().add(5, "day").toString()}
          //render props
          renderLeftBar={TestLeft}
          renderBlock={wrapTestBlock}
          // renderHeader={MyHeader}
        />
      </div>
    </div>
  );
}

export default Gant;
