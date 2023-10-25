// ==UserScript==
// @name         NP-Data My ETL
// @namespace    https://data.vimo.vn
// @version      0.2.2
// @description  Build tree menu for page My ETL
// @author       tanmv@mpos.vn
// @match        https://data.vimo.vn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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
    const dataTree = {
      text: 'Root',
      value: '',
      childrens: [],
    }; // dataTree: Tree

    const mapTree = {}; // mapTree: {[tree_key: 'folder 1 ~ sub-folder ~ ...']: index_number}

    for(const etl of data) {
      const displayName = getFolder(etl.display_name);
      if (!displayName) continue;

      const arr = displayName.split(/~/g);
      if (arr.length > 0) {
        const keys = [];

        let currentTree = dataTree;

        for(const element of arr) {
          keys.push(element.trim());
          const key = keys.join(' ~ ');
          if (mapTree[key] === undefined ) {
            const tree = {
              text: element.trim(),
              value: key,
              childrens: [],
            };

            currentTree.childrens.push(tree);
            mapTree[key] = currentTree.childrens.length - 1;
            currentTree = tree;
          } else {
            currentTree = currentTree.childrens[mapTree[key]];
          }
        }
      }
    }
    sort(dataTree);
    return dataTree;
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
