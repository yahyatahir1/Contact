import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    addContact: function()
    {
      var FirstName=this.get('model.FirstName');
      var Surname=this.get('model.Surname');
      var PhoneNumber=this.get('model.PhoneNumber');
      var MobileNumber=this.get('model.MobileNumber');

      var newContact=this.store.createRecord('contact',
        {
          FirstName:FirstName,
          Surname:Surname,
          PhoneNumber:PhoneNumber,
          MobileNumber:MobileNumber,
        });

    }
  }
});
