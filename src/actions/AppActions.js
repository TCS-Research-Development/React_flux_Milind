var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstant = require('../constants/AppConstant');

var AppActions = {
	addItem:function(item){
		    console.log('inside action'); 
			AppDispatcher.handleViewAction({
			actionType:AppConstant.ADD_ITEM,
			item:item

		})
	},
	
}
module.exports = AppActions;