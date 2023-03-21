import React from 'react'

function FunctionalBar({
  inputText,
  setInputText,
  setKeyword,
  setToggleSortList,
  toggleSortList,
  sortList,
  setSortList,
  sortOption,
}) {
  return (
    <>
      <div className="functional-bar">
        {/* <!-- 搜尋 --> */}
        <div className="search-form">
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="輸入要尋找的商品"
            autoComplete="off"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setKeyword(inputText)
              }
            }}
          />
          <button
            className="btn btn-search"
            onClick={() => {
              setKeyword(inputText)
            }}
          >
            開始搜尋
          </button>
        </div>
        {/* <!-- 收藏 --> */}
        <div className="wrap">
          <div className="like-list-wrap">
            <a
              href="#/"
              className="like-list"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              收藏清單
            </a>
          </div>

          {/* <!-- 商品篩選 --> */}
          <div className="product-sort">
            <a className="sort-to-list">
              <i className="fa-solid fa-list"></i>
            </a>
            <span
              className="sort-selection"
              onClick={() => {
                setToggleSortList(!toggleSortList)
              }}
            >
              {sortList}
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>

      <ul
        className={
          toggleSortList ? 'sort-list sort-list-on' : 'sort-list sort-list-off'
        }
      >
        {sortOption.map((v, i) => {
          return (
            <li
              key={i}
              className="sort-item"
              onClick={() => {
                setSortList(v)
                setToggleSortList(!toggleSortList)
              }}
            >
              {v}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FunctionalBar
