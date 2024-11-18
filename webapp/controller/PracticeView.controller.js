sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("practicefiori.controller.PracticeView", {
        onInit() {
            var oEntryData=[
                {
                    name: "Sample Entry", 
                    value: 0
                },
                {
                    name: "Sample Entry 1", 
                    value: 1

                },
                {
                    name: "Sample Entry 2", 
                    value: 2
                }

            ];
               
            

            var oModel = new sap.ui.model.json.JSONModel();
            this.getOwnerComponent().setModel(oModel,"oModel");
            oModel.setData(oEntryData);

        },
        onVhReq(){
            this._createValueHelpDialog("ValueHelpDialog","oValueHelpDialog");

        },
        _createValueHelpDialog(sFragmentName,sDialogName) {
            // Implementation for creating the value help dialog
        
            var oView = this.getView() ;
            if(!this.oValueHelpDialog){
                this.oValueHelpDialog = sap.ui.xmlfragment("practicefiori.view.fragment."+sFragmentName, this);
                oView.addDependent(this.oValueHelpDialog);

            }
            this.oValueHelpDialog.open();
        },
        handleConfirm(oEvent){
        	var oSelectedItem = oEvent.getParameter("selectedItem");
					if (!oSelectedItem) {
				return;
			}
				var oCreateModel = this.getOwnerComponent().getModel("oModel");
			
            oCreateModel.getData().name = oSelectedItem.getTitle()
			var sTitle = oSelectedItem.getTitle();
			var s = this.getView().byId("_IDGenInput").getValue();
           s  = oSelectedItem.getTitle();
			oCreateModel.refresh();
        },
        handleSearch (oEvent){
          var sValue = oEvent.getParameter("value");
         
          if (sValue) {
            var oFilter = new Filter("name", FilterOperator.Contains, sValue);
            var oFilter1 = new Filter("value", FilterOperator.Contains, sValue);
            var oBinding = oEvent.getParameter("itemsBinding");
            var oFinalFilter = new Filter({
                filters: [oFilter, oFilter1],
                and: false
            });
            oBinding.filter([oFilter]);
        } else {
            oEvent.getSource().getBinding("items").filter([]);
        }

        }
    });
});