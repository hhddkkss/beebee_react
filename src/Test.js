//同步滾輪

import React from 'react'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync'

function Test() {
  return (
    <ScrollSync>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '500px',
            overflowY: 'scroll',
            backgroundColor: 'lightblue',
          }}
        >
          <ul>
            {[...Array(50)].map((_, i) => (
              <li key={`left_${i}`}>Left {i + 1}</li>
            ))}
          </ul>
        </div>
        <ScrollSyncPane>
          <div style={{ height: '500px', overflowY: 'scroll' }}>
            <ul>
              {[...Array(50)].map((_, i) => (
                <li key={`left_${i}`}>Left {i + 1}</li>
              ))}
            </ul>
          </div>
        </ScrollSyncPane>
        <ScrollSyncPane>
          <div style={{ height: '500px', overflowY: 'scroll' }}>
            <ul>
              {[...Array(50)].map((_, i) => (
                <li key={`right_${i}`}>Right {i + 1}</li>
              ))}
            </ul>
          </div>
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  )
}

export default Test
