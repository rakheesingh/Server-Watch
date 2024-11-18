import React from 'react'
import { TextSM } from '../../../designComponent/typography/Typography'
import LineChartComponent from '../../../designComponent/charts/LineChart'
import WithTopComponent from '../../../utils/higherOrderComponent/WithTopComponent'

function LinearChartWithCaption({serverData, label}) {
    return (
        <div
        className="bg-slate-50 shadow-sm rounded-sm flex flex-col justify-center items-center py-4 pr-4"
      >
        <LineChartComponent
          metricsData={serverData}
          xAxis={"time"}
          yAxis={"value"}
        />
        <TextSM textColor={"text-brand-blue-1"}>
          {label}
        </TextSM>
      </div>
        
    )
}

export default WithTopComponent(LinearChartWithCaption);
