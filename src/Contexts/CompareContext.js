import { createContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom' //頁面轉向hook

const CompareContext = createContext({})
export default CompareContext

export const CompareContextProvider = function ({ children }) {
  //比較列表顯示className
  const [compareListClass, setCompareListClass] = useState(
    'compare_list_box d-none'
  )

  //比較區顯示className
  const [compareIngClass, setCompareIngClass] = useState(
    'compareIng_box d-none'
  )
  //比價列表顯現按鈕
  const popCompareBtn = useRef(null)
  //usenavigate
  const navigate = useNavigate()

  return (
    <CompareContext.Provider
      value={{
        compareListClass,
        setCompareListClass,
        compareIngClass,
        setCompareIngClass,
        popCompareBtn,
      }}
    >
      {children}
    </CompareContext.Provider>
  )
}
