<template>
  <div id="container"></div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "start",
  created() {
    //不能在created方法中初始化
    //this.initG6()
  },
  mounted() {
    this.initG6();
  },
  methods: {
    initG6() {
      
      const data = {
        nodes: [
          {
            path: "/path/baojia1",
            id: "baojia1",
            label: "报价服务",
            x: 350,
            y: 50,
            type: "rect",
            size: [150, 50],
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/yufukuan1",
            id: "yufukuan1",
            label: "预付款比例",
            x: 720,
            y: 50,
            type: "rect",
            style: {
              lineDash: [10, 5]
            },
            size: [120, 50],
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            id: "000",
            label: "",
            x: 720,
            y: 140,
            type: "circle",
            size: [0, 0],
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/khxd1",
            id: "khxd1",
            label: "客户下单\n客服下单",

            type: "background-animate", //background-animate  ellipse
            size: 80, //[150, 50]
            style: {
              radius: 5,
              stroke: "#5B8FF9",
              fill: "#DEE9FF",
              lineWidth: 3,
              fillOpacity: 1
            },
            x: 350,
            y: 150,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/kehu1",

            id: "kehu1",
            label: "客户",
            type: "rect",
            size: [100, 50],
            x: 150,
            y: 150,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/daishou1",

            id: "daishou1",
            label: "代收尾款",
            type: "rect",
            size: [100, 50],
            x: 150,
            y: 570,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/fahuo1",

            id: "fahuo1",
            label: "发货",
            type: "rect",
            size: [130, 50],
            style: {
              radius: 5,
              stroke: "red",
              fill: "#ffffff",
              lineWidth: 3,
              fillOpacity: 1
            },
            x: 150,
            y: 720,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/dabao1",

            id: "dabao1",
            label: "打包",
            type: "rect",
            size: [130, 50],
            style: {
              radius: 5,
              stroke: "red",
              fill: "#ffffff",
              lineWidth: 3,
              fillOpacity: 1
            },
            x: 350,
            y: 720,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/hougong1",

            id: "hougong1",
            label: "后工：裁切/覆膜/压痕/烫金/打码/UV等",
            type: "rect",
            size: [300, 50],

            x: 630,
            y: 720,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5],
              [0.8, 1]
            ]
          },
          {
            path: "/path/caigou1",

            id: "caigou1",
            label: "采购下单",
            type: "diamond",
            size: [150, 50],

            x: 350,
            y: 300,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/sheji1",

            id: "sheji1",
            label: "设计/文件",
            type: "rect",
            size: [130, 50],
            x: 600,
            y: 150,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/kucun1",

            id: "kucun1",
            label: "库存",
            type: "rect",
            size: [130, 50],
            x: 600,
            y: 300,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5],
              [1, 0.75],
              [0.25, 1]
            ]
          },
          {
            path: "/path/chuzhi1",

            id: "chuzhi1",
            label: "出纸",
            type: "rect",
            size: [130, 50],
            x: 600,
            y: 570,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/chuban1",

            id: "chuban1",
            label: "出版",
            type: "ellipse",
            size: [130, 50],
            x: 760,
            y: 570,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/yinshua1",

            id: "yinshua1",
            label: "印刷排产\n后工排产",
            type: "rect",
            size: [180, 45],
            x: 980,
            y: 570,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/yinshua2",

            id: "yinshua2",
            label: "印刷",
            type: "rect",
            size: [180, 50],
            x: 980,
            y: 720,
            style: {
              radius: 5,
              stroke: "red",
              fill: "#ffffff",
              lineWidth: 3,
              fillOpacity: 1
            },
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/lianban1",

            id: "lianban1",
            label: "连版",
            type: "rect",
            size: [130, 50],
            style: {
              radius: 5,
              stroke: "red",
              fill: "#ffffff",
              lineWidth: 3,
              fillOpacity: 1
            },
            x: 850,
            y: 150,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/wanshan1",

            id: "wanshan1",
            label: "完善传票",
            type: "rect",
            size: [130, 50],
            x: 850,
            y: 300,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/shenhe1",

            id: "shenhe1",
            label: "审核传票",
            type: "ellipse",
            size: [130, 50],
            style: {
              radius: 5,
              stroke: "red",
              fill: "#ffffff",
              lineWidth: 3,
              fillOpacity: 1
            },
            x: 850,
            y: 430,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          },
          {
            path: "/path/shenhe2",

            id: "shenhe2",
            label: "审核工艺单",
            type: "ellipse",
            size: [130, 50],
            x: 1100,
            y: 430,
            anchorPoints: [
              [0.5, 0],
              [1, 0.5],
              [0.5, 1],
              [0, 0.5]
            ]
          }
        ],
        edges: [
          {
            source: "baojia1", //起点
            target: "khxd1", //终点
            sourceAnchor: 2, // 该边连入 source 点的第 2 个 anchorPoint
            targetAnchor: 0 // 该边连入 target 点的第 0 个 anchorPoint
          },
          {
            source: "khxd1",
            target: "sheji1",
            sourceAnchor: 1,
            targetAnchor: 3,
            label: "进入设计池"
          },
          {
            source: "sheji1",
            target: "lianban1",
            sourceAnchor: 1,
            targetAnchor: 3,
            label: "自动审核"
          },
          {
            source: "kehu1",
            target: "khxd1",
            sourceAnchor: 1,
            targetAnchor: 3
          },
          {
            source: "khxd1",
            target: "caigou1",
            sourceAnchor: 2,
            targetAnchor: 0,
            label: "按订单号提前采购"
          },
          {
            source: "lianban1",
            target: "wanshan1",
            sourceAnchor: 2,
            targetAnchor: 0,
            label: "生成传票"
          },
          {
            source: "wanshan1",
            target: "shenhe2",
            sourceAnchor: 1,
            targetAnchor: 0,
            type: "polyline",
            label: "产生工艺单"
          },
          {
            source: "wanshan1",
            target: "shenhe1",
            sourceAnchor: 2,
            targetAnchor: 0
          },
          {
            source: "shenhe1",
            target: "shenhe2",
            sourceAnchor: 1,
            targetAnchor: 3,
            label: "检查"
          },
          {
            source: "shenhe1",
            target: "chuban1",
            sourceAnchor: 2,
            targetAnchor: 0,
            type: "polyline",
            label: "版房出版"
          },
          {
            source: "shenhe1",
            target: "yinshua1",
            sourceAnchor: 2,
            targetAnchor: 0,
            type: "polyline"
          },
          {
            source: "shenhe1",
            target: "kucun1",
            sourceAnchor: 3,
            targetAnchor: 4,
            type: "polyline",
            style: {
              radius: 1,
              offset: 30,
              endArrow: true,
              stroke: "rgb(250, 52, 52)",
              strokeOpacity: 0.5
            },
            label: "纸张调整？检查原纸张\n采购状态及出库状态"
          },
          {
            source: "wanshan1",
            target: "kucun1",
            sourceAnchor: 3,
            targetAnchor: 1,
            label: "检查库存"
          },
          {
            source: "kucun1",
            target: "caigou1",
            sourceAnchor: 3,
            targetAnchor: 1,
            label: "按传票号采购"
          },
          {
            source: "kucun1",
            target: "chuzhi1",
            sourceAnchor: 2,
            targetAnchor: 0,
            style: {
              radius: 1,
              offset: 30,
              endArrow: true,
              stroke: "rgb(250, 52, 52)",
              strokeOpacity: 0.5
            },
            label: "产生出库单"
          },
          {
            source: "shenhe2",
            target: "hougong1",
            sourceAnchor: 2,
            targetAnchor: 4,
            type: "polyline",
            style: {
              radius: 10,
              offset: 23,
              endArrow: true,
              stroke: "#F6BD16",
              lineDash: [10, 5],
              strokeOpacity: 0.5
            }
          },
          {
            source: "caigou1",
            target: "kucun1",
            sourceAnchor: 2,
            targetAnchor: 5,
            type: "polyline",
            label: "采购入库"
          },
          {
            source: "yinshua1",
            target: "yinshua2",
            sourceAnchor: 2,
            targetAnchor: 0,
            label: "有版有纸？"
          },
          {
            source: "chuban1",
            target: "yinshua2",
            sourceAnchor: 2,
            targetAnchor: 0,
            type: "polyline",
            style: {
              radius: 10,
              offset: 48,
              endArrow: true,
              stroke: "#F6BD16",
              lineDash: [10, 5],
              strokeOpacity: 0.5
            }
          },
          {
            source: "chuzhi1",
            target: "yinshua2",
            sourceAnchor: 2,
            targetAnchor: 0,
            type: "polyline",
            label: "裁切白料？",
            style: {
              radius: 10,
              offset: 30,
              endArrow: true,
              stroke: "#F6BD16",
              lineDash: [10, 5],
              strokeOpacity: 0.5
            }
          },
          {
            source: "yinshua2",
            target: "hougong1",
            sourceAnchor: 3,
            targetAnchor: 1
          },
          {
            source: "hougong1",
            target: "dabao1",
            sourceAnchor: 3,
            targetAnchor: 1
          },
          {
            source: "dabao1",
            target: "fahuo1",
            sourceAnchor: 3,
            targetAnchor: 1
          },
          {
            source: "fahuo1",
            target: "daishou1",
            sourceAnchor: 0,
            targetAnchor: 2
          },
          {
            source: "daishou1",
            target: "kehu1",
            sourceAnchor: 0,
            targetAnchor: 2,
            style: {
              radius: 10,
              offset: 30,
              endArrow: true,
              stroke: "#F6BD16",
              lineDash: [10, 5],
              strokeOpacity: 0.5
            }
          },
          {
            source: "yufukuan1",
            target: "000",
            sourceAnchor: 2,
            targetAnchor: 0,
            style: {
              radius: 10,
              offset: 30,
              endArrow: true,
              stroke: "#F6BD16",
              lineDash: [10, 5],
              strokeOpacity: 0.5
            }
          }
        ]
      };

      const width = document.getElementById("container").scrollWidth;
      const height = document.getElementById("container").scrollHeight || 800;
      const graph = new G6.Graph({
        container: "container",
        width,
        height,
        // fitView: false,

        defaultNode: {
          // type: "modelRect",
          // size: [150, 50],
          style: {
            radius: 5,
            stroke: "#69c0ff",
            fill: "#ffffff",
            lineWidth: 2,
            fillOpacity: 1
          },

          // 文本样式配置
          labelCfg: {
            style: {
              fill: "#595959",
              fontSize: 16
            },
            offset: 30
          },
          // 左侧的小矩形
          preRect: {
            show: false,
            width: 10,
            fill: "#40a9ff",
            radius: 3
          },
          // 节点上左右上下四个方向上的链接circle配置
          linkPoints: {
            top: false,
            right: false,
            bottom: false,
            left: false,
            // circle的大小
            size: 3,
            lineWidth: 1,
            fill: "#72CC4A",
            stroke: "#72CC4A"
          }
        },
        defaultEdge: {
          // type: "polyline", //circle 直线
          style: {
            radius: 1,
            offset: 30,
            endArrow: true,
            stroke: "#F6BD16",
            strokeOpacity: 0.5
          },
          size: 2
        },
        modes: {
          default: ["drag-node"] //"zoom-canvas" 缩放   "drag-canvas"拖拽
        },
        nodeStateStyles: {
          hover: {
            lineWidth: 2,
            stroke: "#1890ff",
            fill: "#e6f7ff"
          }
        }
      });

      graph.data(data);
      graph.render();

      graph.on("node:mouseenter", evt => {
        const { item } = evt;
        graph.setItemState(item, "hover", true);
      });

      graph.on("node:mouseleave", evt => {
        const { item } = evt;
        graph.setItemState(item, "hover", false);
      });

      // 点击节点

      graph.on("node:click", e => {
        // 先将所有当前是 click 状态的节点置为非 click 状态

        const clickNodes = graph.findAllByState("node", "click");
        clickNodes.forEach(cn => {
          graph.setItemState(cn, "click", false);
        });

        const nodeItem = e.item; // 获取被点击的节点元素对象
        // console.log(nodeItem)
        console.log(nodeItem._cfg.model.path);
        graph.setItemState(nodeItem, "click", true); // 设置当前节点的 click 状态为 true
        const evepath = nodeItem._cfg.model.path;
        this.$router.push(evepath);
      });

      //节点锁定
      let ids =
        "yufukuan1,sheji1,baojia1,khxd1,lianban1,kehu1,caigou1,daishou1,fahuo1,dabao1,hougong1,yinshua1,yinshua2,chuzhi1,chuban1,shenhe1,shenhe2,kucun1,wanshan1,000";
      let idArr = ids.split(",");
      idArr.forEach(t => {
        const node = graph.findById(t);
        node.lock();
      });

      //节点动画
      G6.registerNode(
        "background-animate",
        {
          afterDraw(cfg, group) {
            const r = cfg.size / 2;
            const back1 = group.addShape("circle", {
              zIndex: -3,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: cfg.color,
                opacity: 0.6
              },
              name: "back1-shape"
            });
            const back2 = group.addShape("circle", {
              zIndex: -2,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: cfg.color,
                opacity: 0.6
              },
              name: "back2-shape"
            });
            const back3 = group.addShape("circle", {
              zIndex: -1,
              attrs: {
                x: 0,
                y: 0,
                r,
                fill: cfg.color,
                opacity: 0.6
              },
              name: "back3-shape"
            });
            group.sort(); // 排序，根据 zIndex 排序
            back1.animate(
              {
                // 逐渐放大，并消失
                r: r + 10,
                opacity: 0.1
              },
              {
                duration: 3000,
                easing: "easeCubic",
                delay: 0,
                repeat: true // 循环
              }
            ); // 无延迟
            back2.animate(
              {
                // 逐渐放大，并消失
                r: r + 10,
                opacity: 0.1
              },
              {
                duration: 3000,
                easing: "easeCubic",
                delay: 1000,
                repeat: true // 循环
              }
            ); // 1 秒延迟
            back3.animate(
              {
                // 逐渐放大，并消失
                r: r + 10,
                opacity: 0.1
              },
              {
                duration: 3000,
                easing: "easeCubic",
                delay: 2000,
                repeat: true // 循环
              }
            ); // 2 秒延迟
          }
        },
        "circle"
      );
    }
  }
};
</script>