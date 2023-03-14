import { useContext } from 'react'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import CompareContext from '../../Contexts/CompareContext'
function ProductCompareListBox(props) {
  const {
    setCompare_type_btnClass,
    setCompareListType,
    showCompareList,
    setCompareType,
    addCompareIngList,
    setaddCompareIngClass,
    addCompareIngToLocal,
    setCompareIngList,
  } = props

  const { setCompareListClass, setCompareIngClass, compareListClass } =
    useContext(CompareContext)
  const { handleAddOrDeleteCompared } = useContext(ProductFunctionContext)
  return (
    <>
      <div className={compareListClass}>
        <p>選擇產品比較</p>
        <div className="compare_type_btn_group">
          {/*  選擇加"compare_type_btn_hover" */}
          <button
            className={setCompare_type_btnClass(1)}
            onClick={(e) => {
              e.preventDefault()
              setCompareType(1)
              setCompareListType(1)
              setCompareIngList([])
            }}
          >
            手機
          </button>
          <button
            className={setCompare_type_btnClass(2)}
            onClick={(e) => {
              e.preventDefault()
              setCompareListType(2)
              setCompareType(2)
              setCompareIngList([])
            }}
          >
            平板
          </button>
          <button
            className={setCompare_type_btnClass(3)}
            onClick={(e) => {
              e.preventDefault()
              setCompareListType(3)
              setCompareType(3)
              setCompareIngList([])
            }}
          >
            耳機
          </button>
        </div>

        <div className="compare_item_list">
          {showCompareList.map((v, i) => {
            return (
              <div key={v.product_id} className="compare_item_box">
                <img src={'/images/' + v.product_pic.split(',')[0]} alt="" />
                <div className="item_content">
                  <div className="item_name">{v.product_name}</div>
                  <div className="item_price">{v.product_price}TWD</div>
                </div>
                <div className="compare_box_btn_group">
                  <button
                    className="btn compare_delete"
                    onClick={() => {
                      handleAddOrDeleteCompared(v.product_id)
                    }}
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_1102_2823" fill="white">
                        <path d="M4.75 1.9C4.75 1.39609 4.95018 0.912816 5.3065 0.556497C5.66282 0.200178 6.14609 0 6.65 0H12.35C12.8539 0 13.3372 0.200178 13.6935 0.556497C14.0498 0.912816 14.25 1.39609 14.25 1.9V3.8H18.05C18.302 3.8 18.5436 3.90009 18.7218 4.07825C18.8999 4.25641 19 4.49804 19 4.75C19 5.00196 18.8999 5.24359 18.7218 5.42175C18.5436 5.59991 18.302 5.7 18.05 5.7H17.0344L16.2108 17.2349C16.1767 17.7143 15.9622 18.1629 15.6105 18.4904C15.2588 18.8179 14.7961 19 14.3155 19H4.6835C4.20293 19 3.74021 18.8179 3.38854 18.4904C3.03687 18.1629 2.82237 17.7143 2.78825 17.2349L1.9665 5.7H0.95C0.698044 5.7 0.456408 5.59991 0.278249 5.42175C0.100089 5.24359 0 5.00196 0 4.75C0 4.49804 0.100089 4.25641 0.278249 4.07825C0.456408 3.90009 0.698044 3.8 0.95 3.8H4.75V1.9ZM6.65 3.8H12.35V1.9H6.65V3.8ZM3.8703 5.7L4.68445 17.1H14.3165L15.1306 5.7H3.8703ZM7.6 7.6C7.85196 7.6 8.09359 7.70009 8.27175 7.87825C8.44991 8.05641 8.55 8.29804 8.55 8.55V14.25C8.55 14.502 8.44991 14.7436 8.27175 14.9218C8.09359 15.0999 7.85196 15.2 7.6 15.2C7.34804 15.2 7.10641 15.0999 6.92825 14.9218C6.75009 14.7436 6.65 14.502 6.65 14.25V8.55C6.65 8.29804 6.75009 8.05641 6.92825 7.87825C7.10641 7.70009 7.34804 7.6 7.6 7.6ZM11.4 7.6C11.652 7.6 11.8936 7.70009 12.0718 7.87825C12.2499 8.05641 12.35 8.29804 12.35 8.55V14.25C12.35 14.502 12.2499 14.7436 12.0718 14.9218C11.8936 15.0999 11.652 15.2 11.4 15.2C11.148 15.2 10.9064 15.0999 10.7282 14.9218C10.5501 14.7436 10.45 14.502 10.45 14.25V8.55C10.45 8.29804 10.5501 8.05641 10.7282 7.87825C10.9064 7.70009 11.148 7.6 11.4 7.6Z" />
                      </mask>
                      <path
                        d="M4.75 1.9C4.75 1.39609 4.95018 0.912816 5.3065 0.556497C5.66282 0.200178 6.14609 0 6.65 0H12.35C12.8539 0 13.3372 0.200178 13.6935 0.556497C14.0498 0.912816 14.25 1.39609 14.25 1.9V3.8H18.05C18.302 3.8 18.5436 3.90009 18.7218 4.07825C18.8999 4.25641 19 4.49804 19 4.75C19 5.00196 18.8999 5.24359 18.7218 5.42175C18.5436 5.59991 18.302 5.7 18.05 5.7H17.0344L16.2108 17.2349C16.1767 17.7143 15.9622 18.1629 15.6105 18.4904C15.2588 18.8179 14.7961 19 14.3155 19H4.6835C4.20293 19 3.74021 18.8179 3.38854 18.4904C3.03687 18.1629 2.82237 17.7143 2.78825 17.2349L1.9665 5.7H0.95C0.698044 5.7 0.456408 5.59991 0.278249 5.42175C0.100089 5.24359 0 5.00196 0 4.75C0 4.49804 0.100089 4.25641 0.278249 4.07825C0.456408 3.90009 0.698044 3.8 0.95 3.8H4.75V1.9ZM6.65 3.8H12.35V1.9H6.65V3.8ZM3.8703 5.7L4.68445 17.1H14.3165L15.1306 5.7H3.8703ZM7.6 7.6C7.85196 7.6 8.09359 7.70009 8.27175 7.87825C8.44991 8.05641 8.55 8.29804 8.55 8.55V14.25C8.55 14.502 8.44991 14.7436 8.27175 14.9218C8.09359 15.0999 7.85196 15.2 7.6 15.2C7.34804 15.2 7.10641 15.0999 6.92825 14.9218C6.75009 14.7436 6.65 14.502 6.65 14.25V8.55C6.65 8.29804 6.75009 8.05641 6.92825 7.87825C7.10641 7.70009 7.34804 7.6 7.6 7.6ZM11.4 7.6C11.652 7.6 11.8936 7.70009 12.0718 7.87825C12.2499 8.05641 12.35 8.29804 12.35 8.55V14.25C12.35 14.502 12.2499 14.7436 12.0718 14.9218C11.8936 15.0999 11.652 15.2 11.4 15.2C11.148 15.2 10.9064 15.0999 10.7282 14.9218C10.5501 14.7436 10.45 14.502 10.45 14.25V8.55C10.45 8.29804 10.5501 8.05641 10.7282 7.87825C10.9064 7.70009 11.148 7.6 11.4 7.6Z"
                        fill="#4F4F4F"
                        fillOpacity="0.6"
                      />
                      <path
                        d="M6.65 0V-3.09V0ZM12.35 0V-3.09V0ZM14.25 3.8H11.16V6.89H14.25V3.8ZM17.0344 5.7V2.61H14.1572L13.9523 5.47992L17.0344 5.7ZM16.2108 17.2349L13.1286 17.0148L13.1286 17.0155L16.2108 17.2349ZM14.3155 19L14.3156 15.91H14.3155V19ZM4.6835 19V15.91H4.68343L4.6835 19ZM2.78825 17.2349L5.87045 17.0155L5.87044 17.0153L2.78825 17.2349ZM1.9665 5.7L5.04869 5.48042L4.8442 2.61H1.9665V5.7ZM0 4.75H-3.09H0ZM0.95 3.8V6.89V3.8ZM4.75 3.8V6.89H7.84V3.8H4.75ZM6.65 3.8H3.56V6.89H6.65V3.8ZM12.35 3.8V6.89H15.44V3.8H12.35ZM12.35 1.9H15.44V-1.19H12.35V1.9ZM6.65 1.9V-1.19H3.56V1.9H6.65ZM3.8703 5.7V2.61H0.551752L0.78815 5.92012L3.8703 5.7ZM4.68445 17.1L1.6023 17.3201L1.80726 20.19H4.68445V17.1ZM14.3165 17.1V20.19H17.1937L17.3986 17.3201L14.3165 17.1ZM15.1306 5.7L18.2128 5.92012L18.4492 2.61H15.1306V5.7ZM8.27175 7.87825L10.4567 5.69329L8.27175 7.87825ZM6.92825 7.87825L4.74329 5.69329L6.92825 7.87825ZM12.0718 7.87825L14.2567 5.69329L12.0718 7.87825ZM10.7282 7.87825L8.54329 5.69329L10.7282 7.87825ZM7.84 1.9C7.84 2.21561 7.71463 2.51829 7.49146 2.74146L3.12154 -1.62846C2.18573 -0.692656 1.66 0.57657 1.66 1.9H7.84ZM7.49146 2.74146C7.26829 2.96463 6.96561 3.09 6.65 3.09V-3.09C5.32657 -3.09 4.05734 -2.56427 3.12154 -1.62846L7.49146 2.74146ZM6.65 3.09H12.35V-3.09H6.65V3.09ZM12.35 3.09C12.0344 3.09 11.7317 2.96463 11.5085 2.74146L15.8785 -1.62846C14.9427 -2.56427 13.6734 -3.09 12.35 -3.09V3.09ZM11.5085 2.74146C11.2854 2.51829 11.16 2.21561 11.16 1.9H17.34C17.34 0.576568 16.8143 -0.692657 15.8785 -1.62846L11.5085 2.74146ZM11.16 1.9V3.8H17.34V1.9H11.16ZM14.25 6.89H18.05V0.71H14.25V6.89ZM18.05 6.89C17.4824 6.89 16.9381 6.66454 16.5368 6.26321L20.9067 1.89329C20.1491 1.13564 19.1215 0.71 18.05 0.71V6.89ZM16.5368 6.26321C16.1355 5.86188 15.91 5.31756 15.91 4.75H22.09C22.09 3.67853 21.6644 2.65094 20.9067 1.89329L16.5368 6.26321ZM15.91 4.75C15.91 4.18244 16.1355 3.63812 16.5368 3.23679L20.9067 7.60671C21.6644 6.84906 22.09 5.82147 22.09 4.75H15.91ZM16.5368 3.23679C16.9381 2.83546 17.4824 2.61 18.05 2.61V8.79C19.1215 8.79 20.1491 8.36436 20.9067 7.60671L16.5368 3.23679ZM18.05 2.61H17.0344V8.79H18.05V2.61ZM13.9523 5.47992L13.1286 17.0148L19.293 17.455L20.1166 5.92008L13.9523 5.47992ZM13.1286 17.0155C13.15 16.7153 13.2843 16.4343 13.5046 16.2292L17.7164 20.7516C18.6401 19.8914 19.2034 18.7132 19.293 17.4543L13.1286 17.0155ZM13.5046 16.2292C13.7248 16.024 14.0146 15.91 14.3156 15.91L14.3155 22.09C15.5776 22.09 16.7928 21.6118 17.7164 20.7516L13.5046 16.2292ZM14.3155 15.91H4.6835V22.09H14.3155V15.91ZM4.68343 15.91C4.98441 15.91 5.27422 16.024 5.49448 16.2292L1.2826 20.7516C2.20621 21.6118 3.42145 22.09 4.68357 22.09L4.68343 15.91ZM5.49448 16.2292C5.71474 16.4343 5.84908 16.7153 5.87045 17.0155L-0.293952 17.4543C-0.204341 18.7132 0.358998 19.8914 1.2826 20.7516L5.49448 16.2292ZM5.87044 17.0153L5.04869 5.48042L-1.11569 5.91958L-0.293939 17.4545L5.87044 17.0153ZM1.9665 2.61H0.95V8.79H1.9665V2.61ZM0.95 2.61C1.51756 2.61 2.06188 2.83546 2.46321 3.23679L-1.90671 7.60671C-1.14907 8.36436 -0.121476 8.79 0.95 8.79V2.61ZM2.46321 3.23679C2.86454 3.63812 3.09 4.18244 3.09 4.75H-3.09C-3.09 5.82148 -2.66436 6.84906 -1.90671 7.60671L2.46321 3.23679ZM3.09 4.75C3.09 5.31756 2.86454 5.86188 2.46321 6.26321L-1.90671 1.89329C-2.66436 2.65094 -3.09 3.67852 -3.09 4.75H3.09ZM2.46321 6.26321C2.06188 6.66454 1.51756 6.89 0.95 6.89V0.71C-0.121476 0.71 -1.14907 1.13564 -1.90671 1.89329L2.46321 6.26321ZM0.95 6.89H4.75V0.71H0.95V6.89ZM7.84 3.8V1.9H1.66V3.8H7.84ZM6.65 6.89H12.35V0.71H6.65V6.89ZM15.44 3.8V1.9H9.26V3.8H15.44ZM12.35 -1.19H6.65V4.99H12.35V-1.19ZM3.56 1.9V3.8H9.74V1.9H3.56ZM0.78815 5.92012L1.6023 17.3201L7.7666 16.8799L6.95245 5.47988L0.78815 5.92012ZM4.68445 20.19H14.3165V14.01H4.68445V20.19ZM17.3986 17.3201L18.2128 5.92012L12.0485 5.47988L11.2343 16.8799L17.3986 17.3201ZM15.1306 2.61H3.8703V8.79H15.1306V2.61ZM7.6 10.69C7.03243 10.69 6.48812 10.4645 6.08679 10.0632L10.4567 5.69329C9.69907 4.93564 8.67148 4.51 7.6 4.51V10.69ZM6.08679 10.0632C5.68546 9.66188 5.46 9.11757 5.46 8.55H11.64C11.64 7.47852 11.2144 6.45093 10.4567 5.69329L6.08679 10.0632ZM5.46 8.55V14.25H11.64V8.55H5.46ZM5.46 14.25C5.46 13.6824 5.68546 13.1381 6.08679 12.7368L10.4567 17.1067C11.2144 16.3491 11.64 15.3215 11.64 14.25H5.46ZM6.08679 12.7368C6.48812 12.3355 7.03244 12.11 7.6 12.11V18.29C8.67147 18.29 9.69906 17.8644 10.4567 17.1067L6.08679 12.7368ZM7.6 12.11C8.16756 12.11 8.71188 12.3355 9.11321 12.7368L4.74329 17.1067C5.50094 17.8644 6.52853 18.29 7.6 18.29V12.11ZM9.11321 12.7368C9.51454 13.1381 9.74 13.6824 9.74 14.25H3.56C3.56 15.3215 3.98564 16.3491 4.74329 17.1067L9.11321 12.7368ZM9.74 14.25V8.55H3.56V14.25H9.74ZM9.74 8.55C9.74 9.11757 9.51453 9.66188 9.11321 10.0632L4.74329 5.69329C3.98564 6.45093 3.56 7.47852 3.56 8.55H9.74ZM9.11321 10.0632C8.71188 10.4645 8.16757 10.69 7.6 10.69V4.51C6.52852 4.51 5.50093 4.93564 4.74329 5.69329L9.11321 10.0632ZM11.4 10.69C10.8324 10.69 10.2881 10.4645 9.88679 10.0632L14.2567 5.69329C13.4991 4.93564 12.4715 4.51 11.4 4.51V10.69ZM9.88679 10.0632C9.48547 9.66188 9.26 9.11757 9.26 8.55H15.44C15.44 7.47852 15.0144 6.45093 14.2567 5.69329L9.88679 10.0632ZM9.26 8.55V14.25H15.44V8.55H9.26ZM9.26 14.25C9.26 13.6824 9.48546 13.1381 9.88679 12.7368L14.2567 17.1067C15.0144 16.3491 15.44 15.3215 15.44 14.25H9.26ZM9.88679 12.7368C10.2881 12.3355 10.8324 12.11 11.4 12.11V18.29C12.4715 18.29 13.4991 17.8644 14.2567 17.1067L9.88679 12.7368ZM11.4 12.11C11.9676 12.11 12.5119 12.3355 12.9132 12.7368L8.54329 17.1067C9.30094 17.8644 10.3285 18.29 11.4 18.29V12.11ZM12.9132 12.7368C13.3145 13.1381 13.54 13.6824 13.54 14.25H7.36C7.36 15.3215 7.78564 16.3491 8.54329 17.1067L12.9132 12.7368ZM13.54 14.25V8.55H7.36V14.25H13.54ZM13.54 8.55C13.54 9.11757 13.3145 9.66188 12.9132 10.0632L8.54329 5.69329C7.78564 6.45093 7.36 7.47852 7.36 8.55H13.54ZM12.9132 10.0632C12.5119 10.4645 11.9676 10.69 11.4 10.69V4.51C10.3285 4.51 9.30093 4.93564 8.54329 5.69329L12.9132 10.0632Z"
                        fill="#4F4F4F"
                        fillOpacity="0.6"
                        mask="url(#path-1-inside-1_1102_2823)"
                      />
                    </svg>
                  </button>
                  <button
                    className={setaddCompareIngClass(v.product_id)}
                    onClick={(e) => {
                      e.preventDefault()
                      addCompareIngList(v.product_id)
                    }}
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6597 9.59203H14.0191V2.9514C14.0191 2.13654 13.3583 1.47571 12.5434 1.47571H11.0677C10.2529 1.47571 9.59203 2.13654 9.59203 2.9514V9.59203H2.9514C2.13654 9.59203 1.47571 10.2529 1.47571 11.0677V12.5434C1.47571 13.3583 2.13654 14.0191 2.9514 14.0191H9.59203V20.6597C9.59203 21.4746 10.2529 22.1354 11.0677 22.1354H12.5434C13.3583 22.1354 14.0191 21.4746 14.0191 20.6597V14.0191H20.6597C21.4746 14.0191 22.1354 13.3583 22.1354 12.5434V11.0677C22.1354 10.2529 21.4746 9.59203 20.6597 9.59203Z"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="compare_type_btn_group ">
          <button
            className='compare_type_btn start"'
            onClick={(e) => {
              e.preventDefault()
              addCompareIngToLocal()

              if (
                localStorage.getItem('compareIngList') &&
                JSON.parse(localStorage.getItem('compareIngList')).length > 1
              ) {
                setCompareIngClass('compareIng_box')
                setCompareListClass('compare_list_box d-none')
              }
            }}
          >
            開始比價!
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductCompareListBox