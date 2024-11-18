sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
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
        }
    });
});