// ==UserScript==
// @name         NP-Data My ETL
// @namespace    https://data.vimo.vn
// @version      0.2.3
// @description  Build tree menu for page My ETL
// @author       tanmv@mpos.vn
// @match        https://data.vimo.vn/*
// @icon         data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MTkuNTIgMjI5LjM0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZhYTgxOTt9LmNscy0ye2ZpbGw6IzA2NjFhYjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkxvZ28gdmltbyBmaW5hbDwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjcwLjY1LDIzNy4xOGwtMzcuMzktMzcuMzlhOS44LDkuOCwwLDAsMC0xMy44NSwwTDE0MSwyNzguMTlsNjAuOCw2MC44TDE4Ny41LDM1My4zbC02MC44LTYwLjhMMTAxLjE1LDMxOGE5LjgsOS44LDAsMCwwLDAsMTMuODVsNjkuMTksNjkuMTlhOS43OSw5Ljc5LDAsMCwwLDEzLjg1LDBsODYuNDUtODYuNDVhMTIuNjUsMTIuNjUsMCwwLDAsMy43MS04Ljk1VjI0Ni4xMkExMi42NSwxMi42NSwwLDAsMCwyNzAuNjUsMjM3LjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLjQ4IC0xNzQuNzUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTM4LDIzMC4zM0wxMzIuNzIsMjI1YTM1LjQyLDM1LjQyLDAsMCwxLDUwLDBsLTUuMzIsNS4zMkEyNy45LDI3LjksMCwwLDAsMTM4LDIzMC4zM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC40OCAtMTc0Ljc1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE5MSwyMTYuNzhhNDcuMDgsNDcuMDgsMCwwLDAtNjYuNTEsMGwtNS4zMi01LjMyYTU0LjYxLDU0LjYxLDAsMCwxLDc3LjE0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuNDggLTE3NC43NSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMDUuNjQsMjAyLjEzYTY3LjcsNjcuNywwLDAsMC05NS44LDBsLTUuMzItNS4zMmE3NS4yMiw3NS4yMiwwLDAsMSwxMDYuNDQsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC40OCAtMTc0Ljc1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxNy40MiwzMjAuMzZMOTQuMjIsMTk3LjE2YTUuMzQsNS4zNCwwLDAsMC03LjUzLDBMMTIsMjcxLjgxYTUuMzQsNS4zNCwwLDAsMCwwLDcuNTNsMTIzLjIsMTIzLjJhNS4zNCw1LjM0LDAsMCwwLDcuNTMsMGw3NC42NS03NC42NUE1LjM0LDUuMzQsMCwwLDAsMjE3LjQyLDMyMC4zNlpNMTg3LjUsMzUzLjNsLTEyNi0xMjZMNzUuODEsMjEzbDEyNiwxMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuNDggLTE3NC43NSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00NTAuMDksMjQwLjA4YzIuMTEsMCw0LjA2LDEuNDYsMi42LDQuNTRMMzkzLjQ3LDM2Ny43NWMtMC44MSwxLjYyLTEuOTUsMy40MS0zLjczLDMuNDFIMzg4Yy0xLjc4LDAtMi45Mi0xLjc4LTMuNzMtMy40MUwzMjUsMjQ0LjQ2Yy0xLjQ2LTIuOTIuNDktNC4zOCwyLjYtNC4zOGgyNi43N2MxLjc4LDAsMi45MiwxLjQ2LDQuMjIsNC4wNmwzMC4zMyw2Ny40OCwzMC4xNy02Ny40OGMxLjMtMi42LDIuNDMtNC4wNiw0LjIyLTQuMDZoMjYuNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuNDggLTE3NC43NSkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00OTguNDMsMjQwLjA4SDQ3My43N2EzLjE1LDMuMTUsMCwwLDAtMy4yNCwzLjI0VjM2Ni40NWEzLjMzLDMuMzMsMCwwLDAsMy40MSwzLjRoMjQuNjZhMy40LDMuNCwwLDAsMCwzLjI0LTMuNFYyNDMuMzNhMy40LDMuNCwwLDAsMC0zLjQxLTMuMjRoMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC40OCAtMTc0Ljc1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5OC40MywxOTIuN0g0NzMuNzdhMy4xNiwzLjE2LDAsMCwwLTMuMjUsMy4yNXYyMy4xOGEzLjMzLDMuMzMsMCwwLDAsMy40MSwzLjQxSDQ5OC42YTMuNCwzLjQsMCwwLDAsMy4yNS0zLjQxVjE5NS45NWEzLjQsMy40LDAsMCwwLTMuNDEtMy4yNWgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLjQ4IC0xNzQuNzUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjcyLjMzLDI0MC4wOGEzLjQsMy40LDAsMCwxLDMuNDEsMy4yNFYzNjYuNDVhMy40LDMuNCwwLDAsMS0zLjI1LDMuNEg2NDcuNjdhMy4zMywzLjMzLDAsMCwxLTMuNDEtMy40di02My4xTDYwNS41LDM2MS4wOWE0LjUsNC41LDAsMCwxLTQuMDYsMi40M2gtMS4zYTQuNDQsNC40NCwwLDAsMS0zLjg5LTIuNDNsLTM3LjgtNTcuNTl2NjIuOTRhMy40LDMuNCwwLDAsMS0zLjI0LDMuNEg1MzAuMzlhMy4zMywzLjMzLDAsMCwxLTMuNDEtMy40VjI0My4zM2EzLjE1LDMuMTUsMCwwLDEsMy4yNC0zLjI0aDIzLjY4YzEuNDYsMCwyLjQzLjgxLDMuNDEsMi4yN2w0My40Nyw2Ny4xNiw0NC40NS02Ny4xNmMxLTEuNDYsMS43OC0yLjI3LDMuNDEtMi4yN2gyMy42OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC40OCAtMTc0Ljc1KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTc2NCwyMzlhNjYsNjYsMCwxLDAsNjYsNjZBNjYsNjYsMCwwLDAsNzY0LDIzOVptLTAuMTcsMTAxLjM4Yy0xOC4zMywwLTM0LjA3LTE2Ljg3LTM0LjA3LTM1LjU0czE1Ljc0LTM1LjIsMzQuMDctMzUuMmMxOC40OCwwLDM0LjA3LDE2LjU1LDM0LjA3LDM1LjJTNzgyLjMsMzQwLjM0LDc2My44MiwzNDAuMzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuNDggLTE3NC43NSkiLz48L3N2Zz4=
// @grant        none
// ==/UserScript==

/*
  interface Tree {
    text: string;
    value: string;
    childrens?: Tree[];
  }
*/

$(() => {
  'use strict';
  const pageSize = 100;
  let selectMode = false;

  const addCss = () => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const css = 'ul.tree-view-custom, ul.tree-view-custom ul {list-style-type: none; padding-left: 10px; text-align: left; } ul.tree-view-custom li, ul.tree-view-custom ul li {cursor: pointer; margin-left: 8px; } ul.tree-view-custom li .caret {-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } ul.tree-view-custom li .caret .arrow::before {content: "▶"; font-style: normal; color: black; display: inline-block; margin-right: 4px; } ul.tree-view-custom li .caret.caret-down .arrow::before {-ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); transform: rotate(90deg); } ul.tree-view-custom li .nested {display: none; } ul.tree-view-custom li .active {display: block; } ul.tree-view-custom li .selected[search-data] {color: var(--accent) !important; font-weight: 600; } .switch {position: relative; display: inline-block; width: 40px; height: 20px; } .switch input {opacity: 0; width: 0; height: 0; } .slider {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .4s; transition: .4s; } .slider:before {position: absolute; content: ""; height: 20px; width: 20px; left: 1px; bottom: 0; background-color: white; -webkit-transition: .4s; transition: .4s; } input:checked + .slider {background-color: #2196F3; } input:focus + .slider {box-shadow: 0 0 1px #2196F3; } input:checked + .slider:before {-webkit-transform: translateX(18px); -ms-transform: translateX(18px); transform: translateX(18px); } .slider.round {border-radius: 34px; } .slider.round:before {border-radius: 50%; } .div-actions {display: flex; justify-content: space-between; align-items: center; } .div-actions .btn-reload {border: 1px solid #DDD; font-size: 16px; border-radius: 10px; }';

    const styleCustom = document.createElement('style');
    head.appendChild(styleCustom);
    styleCustom.type = 'text/css';
    if (styleCustom.styleSheet){
      styleCustom.styleSheet.cssText = css;
    } else {
      styleCustom.appendChild(document.createTextNode(css));
    }
  }

  const setValueSearch = (text) => {
    const input = $('#input-search');
    const btn = $('#refresh-database');
    input.val(selectMode && text ? `[f[${text}]]` : text);
    setTimeout(() => {
      input.focus();
      setTimeout(() => {
        btn.focus();
      }, 200);
    }, 100);
  }

  const getFolder = (name) => {
    const regex = /\[f\[(.+)\]\]/i;
    const matches = name.match(regex);
    return matches ? matches[1] : '';
  }

  const sort = (node) => {
    if (node.childrens && node.childrens.length > 0) {
      node.childrens.sort((a, b) => {
        return a.text.toLocaleLowerCase().localeCompare(b.text.toLocaleLowerCase());
      });
      for(const child of node.childrens) {
        sort(child);
      }
    }
  }

  const buildDataTree = (data) => {
    const rootNode = {
      text: 'Root',
      value: '',
      childrens: [],
    }; // rootNode: Tree

    const mapTree = {}; // mapTree: {[tree_key: 'folder 1 ~ sub-folder ~ ...']: index_number}

    for(const etl of data) {
      const displayName = getFolder(etl.display_name);
      if (!displayName) continue;

      const arr = displayName.split(/~/g);
      if (arr.length > 0) {
        const keys = [];

        let currentNode = rootNode;

        for(const element of arr) {
          keys.push(element.trim());
          const key = keys.join(' ~ ');
          if (mapTree[key] === undefined ) {
            const tree = {
              text: element.trim(),
              value: key,
              childrens: [],
            };

            currentNode.childrens.push(tree);
            mapTree[key] = currentNode.childrens.length - 1;
            currentNode = tree;
          } else {
            currentNode = currentNode.childrens[mapTree[key]];
          }
        }
      }
    }
    sort(rootNode);
    return rootNode;
  }

  const buildNode = (li, childrens) => {
    if (childrens && childrens.length > 0) {
      const ul = $('<ul class="nested active"></ul>')
      for(const children of childrens) {
        if (children.childrens && children.childrens.length > 0) {
          const subLi = $(`<li><div class="caret caret-down"><i class="arrow"></i><span search-data="${children.value}">${children.text}</span></div></li>`);
          ul.append(subLi);
          buildNode(subLi, children.childrens);
        } else {
          ul.append(`<li style="margin-left: 22px" search-data="${children.value}">${children.text}</li>`);
        }
      }
      li.append(ul);
    }
  }

  const buildTree = (data) => {
    const ul = $('<ul class="tree-view-custom"></ul>');
    $('.navigation-panel').append(ul);
    const li = $('<li><div class="caret caret-down"><i class="arrow"></i><span search-data="" class="selected">Root</span></div></li>');
    buildNode(li, data.childrens);
    ul.append(li);
  }

  const setActions = () => {
    const toggler = document.getElementsByClassName("arrow");
    for (const element of toggler) {
      element.addEventListener("click", function() {
        this.parentElement.parentElement.querySelector(".nested")?.classList.toggle("active");
        this.parentElement.classList.toggle("caret-down");
      });
    }

    const nodes = $('ul.tree-view-custom [search-data]');
    for(const node of nodes) {
      $(node).click(function() {
        $('ul.tree-view-custom .selected[search-data]').removeClass('selected');
        const value = $(this).attr('search-data');
        $(this).addClass('selected');
        setValueSearch(value);
      });
    }

    setTimeout(() => {
      setActionMoreMenu();
    }, 3000);
  }

  const getData = (page = 0, list = []) => {
    $.ajax({
      type: "POST",
      url: '/api/data_cook/my_etl',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({keyword: "", from: page * pageSize, size: pageSize, sorts:[]}),
      success: (res) => {
        const resList = res.data;
        list = [...list, ...resList];
        if (resList.length < pageSize) {
          const dataTree = buildDataTree(list);
          buildTree(dataTree);
          setActions();
        } else {
          getData(page + 1, list);
        }
      },
    });
  }

  const setTextSelectMode = (label) => {
    label.text(selectMode ? 'chỉ folder hiện tại' : 'chọn cả folder con');
  }

  const render = () => {
    !$('.navigation-panel hr').length && $('.navigation-panel').append('<hr/>');

    const input = $('<input type="checkbox"/>');
    const bSwitch = $('<label class="switch"></label>').append(input).append('<span class="slider round"></span>');
    const btnReload = $('<button class="btn-reload"> ⟳ </button>');
    const label = $('<span></span>');
    const div = $('<div class="div-actions"></div>').append(bSwitch).append(label).append(btnReload);
    $('.navigation-panel').append(div);

    input.change(function() {
      selectMode = this.checked;
      setTextSelectMode(label);
    });

    btnReload.click(function() {
      $('ul.tree-view-custom').empty();
      getData(0, []);
    });

    setTextSelectMode(label);

    getData(0, []);
  };

  const setActionMoreMenu = () => {
    const liRunSerial = $('<li data-v-758d9e30 id="btn-context-menu-3" class="" style="cursor: pointer;"><span style="cursor: pointer;">Run serials</span></li>');
    const popup = $('#query-action-menu').append(liRunSerial);

    let etlId = '';
    $('i[data-title="More"]').click(function() {
      const id = $(this).attr('id');
      const arr = id.split(/-/g);
      etlId = arr[arr.length - 1];
    });

    liRunSerial.click(() => {
      if (etlId) {
        console.log('run serials', etlId);
        popup.hide();
      }
    });
  }

  let isRendered = false;
  addCss();

  setInterval(() => {
    const path = window.location.pathname;
    if (path === '/data-warehouse/data-cook/my-etl') {
      if (!isRendered) {
        render();
        isRendered = true;
      }
    } else {
      $('ul.tree-view-custom').empty();
      $('.div-actions').empty();
      isRendered = false;
    }
  }, 1000);
});
