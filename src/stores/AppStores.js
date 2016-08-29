var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstant = require('../constants/AppConstant');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var React = require('react');
var ReactDOM = require('react-dom');
//var DataApp = require('../components/app').comp2;

var Data ={};

function loadData(data) {
 
    Data = data;
    //console.log("inside load function"+Data);
}


var AppStore = assign({}, EventEmitter.prototype, {

    getData: function() {
    return Data;
  },

    emitChange: function() {
    this.emit('change');
  },

   addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload){
var action = payload.action;

 
  switch(action.actionType) {
    case AppConstant.ADD_ITEM:
      console.log('in store');
      loadData(action.item);
      console.log(Data);

      break;
    default:
      return true;
  }
  
   AppStore.emitChange();

     return true;

});

module.exports = AppStore;