import React from 'react'
import { CRow, CCol, CDropdown, CDropdownMenu, CDropdownItem, CDropdownToggle, CWidgetStatsA } from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const WidgetsDropdown = () => {
  const navigate = useNavigate() 

  const handleExamView = async (route) => {
    navigate(`${route}`);
  }
  return (
  
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={() => { navigate("/teacher") }}
          value={
            <>
               Teacher Master{' '}
            </>
          }
          title="Click Here"

          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          style={{ cursor: "pointer" }}
          onClick={() => { navigate("/student") }}
          value={
            <>
              Student Master{' '}

            </>
          }
          title="Click Here"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          onClick={() => { navigate("/examination") }}
          style={{ cursor: "pointer" }}
          value={
            <>
              Examination Master{' '}
             
            </>
          }
          title="Click Here"
         
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          style={{ cursor: "pointer" }}
          value={
            <>
              Exam Sessions{' '}
              
            </>
          }
          title="Click Here"
         
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
             
            />
          }
        />
      </CCol>
    </CRow>
   
  )
}

export default WidgetsDropdown
