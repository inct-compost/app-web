/**
 * echartsTheme
 */
export const echartsTheme = () => {
  return {
    themeName: 'custom',
    theme:
    {
      color: [
        '#516b91',
        '#59c4e6',
        '#edafda',
        '#93b7e3',
        '#a5e7f0',
        '#cbb0e3'
      ],
      backgroundColor: 'transparent',
      textStyle: {},
      title: {
        textStyle: {
          color: '#516b91'
        },
        subtextStyle: {
          color: '#93b7e3'
        }
      },
      line: {
        itemStyle: {
          borderWidth: '2'
        },
        lineStyle: {
          width: '4'
        },
        symbolSize: '10',
        symbol: 'circle',
        smooth: true
      },
      radar: {
        itemStyle: {
          borderWidth: '2'
        },
        lineStyle: {
          width: '4'
        },
        symbolSize: '5',
        symbol: 'circle',
        smooth: true
      },
      bar: {
        itemStyle: {
          barBorderWidth: '1',
          barBorderColor: '#333333'
        }
      },
      pie: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      scatter: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      boxplot: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      parallel: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      sankey: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      funnel: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      gauge: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        }
      },
      candlestick: {
        itemStyle: {
          color: '#edafda',
          color0: 'transparent',
          borderColor: '#d680bc',
          borderColor0: '#8fd3e8',
          borderWidth: '2'
        }
      },
      graph: {
        itemStyle: {
          borderWidth: '1',
          borderColor: '#333333'
        },
        lineStyle: {
          width: 1,
          color: '#aaaaaa'
        },
        symbolSize: '10',
        symbol: 'circle',
        smooth: true,
        color: [
          '#516b91',
          '#59c4e6',
          '#edafda',
          '#93b7e3',
          '#a5e7f0',
          '#cbb0e3'
        ],
        label: {
          color: '#333333'
        }
      },
      map: {
        itemStyle: {
          areaColor: '#f3f3f3',
          borderColor: '#516b91',
          borderWidth: 0.5
        },
        label: {
          color: '#000'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#a5e7f0',
            borderColor: '#516b91',
            borderWidth: 1
          },
          label: {
            color: '#516b91'
          }
        }
      },
      geo: {
        itemStyle: {
          areaColor: '#f3f3f3',
          borderColor: '#516b91',
          borderWidth: 0.5
        },
        label: {
          color: '#000'
        },
        emphasis: {
          itemStyle: {
            areaColor: '#a5e7f0',
            borderColor: '#516b91',
            borderWidth: 1
          },
          label: {
            color: '#516b91'
          }
        }
      },
      categoryAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333'
          }
        },
        axisLabel: {
          show: true,
          color: '#999999'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [
            ]
          }
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.05)',
              'rgba(200,200,200,0.02)'
            ]
          }
        }
      },
      valueAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333'
          }
        },
        axisLabel: {
          show: true,
          color: '#999999'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [
              '#333333'
            ]
          }
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.05)',
              'rgba(200,200,200,0.02)'
            ]
          }
        }
      },
      logAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333'
          }
        },
        axisLabel: {
          show: true,
          color: '#999999'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [
              '#333333'
            ]
          }
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.05)',
              'rgba(200,200,200,0.02)'
            ]
          }
        }
      },
      timeAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#cccccc'
          }
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#333333'
          }
        },
        axisLabel: {
          show: true,
          color: '#999999'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [
              '#333333'
            ]
          }
        },
        splitArea: {
          show: false,
          areaStyle: {
            color: [
              'rgba(250,250,250,0.05)',
              'rgba(200,200,200,0.02)'
            ]
          }
        }
      },
      toolbox: {
        iconStyle: {
          borderColor: '#999999'
        },
        emphasis: {
          iconStyle: {
            borderColor: '#666666'
          }
        }
      },
      legend: {
        textStyle: {
          color: '#999999'
        }
      },
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: '#333333',
            width: '1'
          },
          crossStyle: {
            color: '#333333',
            width: '1'
          }
        }
      },
      timeline: {
        lineStyle: {
          color: '#8fd3e8',
          width: 1
        },
        itemStyle: {
          color: '#8fd3e8',
          borderWidth: 1
        },
        controlStyle: {
          color: '#8fd3e8',
          borderColor: '#8fd3e8',
          borderWidth: 0.5
        },
        checkpointStyle: {
          color: '#8fd3e8',
          borderColor: '#8a7ca8'
        },
        label: {
          color: '#8fd3e8'
        },
        emphasis: {
          itemStyle: {
            color: '#8fd3e8'
          },
          controlStyle: {
            color: '#8fd3e8',
            borderColor: '#8fd3e8',
            borderWidth: 0.5
          },
          label: {
            color: '#8fd3e8'
          }
        }
      },
      visualMap: {
        color: [
          '#516b91',
          '#59c4e6',
          '#a5e7f0'
        ]
      },
      dataZoom: {
        backgroundColor: 'rgba(0,0,0,0)',
        dataBackgroundColor: 'rgba(255,255,255,0.3)',
        fillerColor: 'rgba(167,183,204,0.4)',
        handleColor: '#a7b7cc',
        handleSize: '100%',
        textStyle: {
          color: '#333'
        }
      },
      markPoint: {
        label: {
          color: '#333333'
        },
        emphasis: {
          label: {
            color: '#333333'
          }
        }
      }
    }

  }
}
