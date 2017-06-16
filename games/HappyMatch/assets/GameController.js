/**
 * Created by xieyajie on 16/06/2017.
 */

/*
 * 创建地图
 * */
let GameController = cc.Class({
    name: 'GameController',

    properties: {
        map: Map
    },

    onLoad: function () {
        this.initGame();
    },

    /*
     * 初始化游戏
     * */
    initGame: function () {
        this.map = require("Map");

        let size = 4;
        this.map.initMap(size);
        this.setupCards(size);
    },

    finishInit: function () {
        this.map.finishInitMap();
    },

    setupCards: function (size) {

    },

});